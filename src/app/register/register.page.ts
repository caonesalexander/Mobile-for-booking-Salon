import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Action } from 'rxjs/internal/scheduler/Action';

//import { AccessProviders } from '../../providers/access-providers'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public customerID: any;
  public lastname: any;
  public firstname: any;
  public middlename: any;
  public birth: any;
  public address: any;
  public email: any;
  public pass: any;
  public contact: any;

  constructor( private router: Router,
    private http: HttpClient ) {}

  register() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = {
      customerID: this.customerID,
      lastname: this.lastname,
      firstname: this.firstname,
      middlename: this.middlename,
      birth: this.birth,
      pass: this.pass,
      address: this.address,
      email: this.email,
      contact: this.contact,

    };

    this.http.post('http://192.168.1.111/RestAPI/Registration.php', JSON.stringify(data)).subscribe(
      (response: any) => {
        if(response.resp === 'success'){
          alert('You now Registered');
        } else {
          alert('Invalid, Please try again.');
        }
      },
      (error) => {
        alert(error.message);
      });

      this.customerID = ' ';
      this.lastname = ' ';
      this.firstname = ' ';
      this.middlename = ' ';
      this.birth = ' ';
      this.pass = ' ';
      this.address = ' ';
      this.email = ' ';
      this.contact = ' ';
  }



  formLogin() {
    this.router.navigate(['/login']);
  }

  random() {
    return (Math.floor(100000 + Math.random() * 900000));
  }

  ngOnInit() {
  }

  // ionViewDidEnter() {
  //   this.disablebutton=false;
  // }

  // async tryRegistration() {
  //   if(this.fullname===''){
  //     this.presentToast('Please Enter your Fullname');
  //   }
  //   else if (this.gender==='') {
  //     this.presentToast('Please Enter your gender');
  //   }
  //   else if (this.datebirth==='') {
  //     this.presentToast('Please Enter your email');
  //   }
  //   else if (this.email==='') {
  //     this.presentToast('Please Enter your gender');
  //   }
  //   else if (this.password==='') {
  //     this.presentToast('Please Enter your password');
  //   }
  //   else if (this.password != this.passwordconfirm) {
  //     this.presentToast('Your Password did not match');
  //   }
  //   else {
  //     this.disablebutton = true;
  //     const loading = await this.loadingctrl.create({
  //       message: 'Blablabla',
  //     });

  //     await loading.present();

  //     return new promise(resolve => {
  //       action: 'registration_progress',

  //     });
  //  }
  //}



}
