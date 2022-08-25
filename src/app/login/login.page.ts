/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public pass: any;
  public customers=[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public fullname: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,
    public http: HttpClient,
    private alertController: AlertController
  ) {}

  regForm() {
    this.router.navigate(['/register']);
  }


  ngOnInit() {
    // this.apiService.getData().subscribe(data => {
    //   console.log(data);
    //   this.customers=data;

    // });
  }


  booking() {

    this.router.navigate(['/book']);
  }



 async login() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = {
      email: this.email,
      pass: this.pass
    };


    this.http.post('http://localhost/RestAPI/login.php', JSON.stringify(data)).subscribe(
      async (response: any) => {
        if(response.resp === 'success'){
          this.router.navigate(['/book/booking']);
        } else {

          const alert = await this.alertController.create({
            header: 'Invalid to login',
            subHeader: 'Incorrect Password or Email Address',
            message: 'Try Again!!',
            buttons: ['OK'],
          });
          await alert.present();
        }
      },
     async (error) => {
        const alert = await this.alertController.create({
          header: 'Invalid to login',
          subHeader: 'Please fill in all missing field',
          message: 'Try Again!!',
          buttons: ['OK'],
        });
        await alert.present();
      });

      this.email = '';
      this.pass = '';
  }

// getStudent(){

//   this._apiService.getStudent().subscribe((res: any) => {
//     console.log('success',res);
//     const student = res[0];
//     this.fullname = student.last_name;
//   },(err: any) =>{
//     console.log('ERROR',err);
//   });
// }

}
