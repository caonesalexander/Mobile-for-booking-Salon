/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonItem, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ApiService } from '../api.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  customers: any=[];
  public fullname: any;
  public date: any;
  public contact: any;
  public email: any;
  public stylist: any;
  public service: any;
  public customer_ID: any;
  public id: any;
  public book_id: any;
  public names: any;

  sDefaultEmail:  string;

  myRand: number;

  employee: any=[];
  services: any=[];
  val: any=[];
  selectedCities = {};
  selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  constructor(public _apiService: ApiService,
    public navCtrl: NavController,
    public http: HttpClient,
    private alertController: AlertController) {
    this.setToday();
    this.getEmployee();
    this.getService();
    this.getCustomer();
  }

  setToday() {
    this.formattedString= format(parseISO(format(new Date(), 'yyyy-MM-dd')+ 'T09:00:00.000Z'), 'MMM d, yyyy');
  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString= format(parseISO(value), 'MMM d, yyyy');
    this.showPicker = false;
  }

  ngOnInit() {
  }

  getEmployee() {
    this._apiService.getEmployee().subscribe((res: any) => {
      // console.log('SUCCESS ---', res);
      this.employee = res;
    },(error: any) =>{
      console.log('ERROR ---', error);
    });

  }

  getCustomer() {
    this._apiService.getCustomer().subscribe((res: any) => {
      // console.log('SUCCESS ---', res);
      this.customers = res;
    },(error: any) =>{
      console.log('ERROR ---', error);
    });

  }


  getService() {
    this._apiService.getService().subscribe((res: any) => {
      // console.log('SUCCESS ---', res);
      this.services = res;
    },(error: any) =>{
      console.log('ERROR ---', error);
    });

  }

  book() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = {
      customer_name: this.fullname,
      customer_contact: this.contact,
      date_of_appointment: this.date,
      stylist_name: this.stylist,
      service: this.service.toString(),
      id: this.id,
      book_id: this.book_id,
      customer_ID: this.customer_ID
    };


    this.http.post('http://localhost/RestAPI/book.php', JSON.stringify(data)).subscribe(
     async (response: any) => {
        if(response.resp === 'success'){
          const alert = await this.alertController.create({
            header: 'Booking Successfully',
            subHeader: 'Wait to approve your booking request',
            message: 'Thank you!',
            buttons: ['OK'],
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Invalid to Book',
            subHeader: 'You are in block listed',
            message: 'Try Again!!',
            buttons: ['OK'],
          });
          await alert.present();
        }
      },
      async (_error: any) => {

        const alert = await this.alertController.create({
          header: 'Invalid to Register',
          subHeader: 'Something Went Wrong',
          message: 'Try Again!!',
          buttons: ['OK'],
        });
        await alert.present();
      });
  }



ionViewDidEnter() {
   this.myRand=this.random();
  }

 random(): number {
   const rand = Math.floor(Math.random()*900000)+1;
   return rand;
}

  // saveCity() {
  //   console.log(this.fullname);
  //   console.log(this.contact);
  //   console.log(this.date);
  //   console.log(this.stylist);
  //   console.log(this.service.toString());
  //   // console.log(Object.keys(this.selectedCities).filter((key)=> {return this.selectedCities[key];}));
  //   console.log(this.id);
  //   console.log(this.book_id);
  //   // console.log(this.selectedCities);
  //   // const array = Object.keys(this.selectedCities).filter((key)=> {return this.selectedCities[key];});
  //   // console.log(array);
  // }

}
