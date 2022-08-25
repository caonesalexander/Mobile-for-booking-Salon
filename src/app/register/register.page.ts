import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Z_BLOCK } from 'zlib';

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
  public confirm: any;
  myRand: number;
  constructor( private router: Router,
    private http: HttpClient,
    private alertController: AlertController ) {}

async register() {
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
      confirm: this.confirm,

    };

    this.http.post('http://localhost/RestAPI/Registration.php', JSON.stringify(data)).subscribe(
     async (response: any) => {

        if(response.resp === 'success'){
          const alert = await this.alertController.create({
            header: 'Registered',
            subHeader: 'You may now login in to your account',
            message: 'Goodluck',
            buttons: ['OK'],
          });
          this.router.navigate(['/login']);
          await alert.present();

          this.customerID = '';
          this.lastname = '';
          this.firstname = '';
          this.middlename = '';
          this.birth = '';
          this.pass = '';
          this.address = '';
          this.email = '';
          this.contact = '';
          this.confirm = '';

        }
        if(response.resp === 'invalid') {

          const alert = await this.alertController.create({
            header: 'Invalid to Register',
            subHeader: 'The name you use is already registered',
            message: 'Try Again!!',
            buttons: ['OK'],
          });
          await alert.present();
          this.lastname = '';
          this.firstname = '';
        }

        if(response.resp === 'fail') {
          const alert = await this.alertController.create({
            header: 'Invalid to Register',
            subHeader: 'Email address and password is already taken',
            message: 'Please use another email and password',
            buttons: ['OK'],
          });
          await alert.present();
          this.email = '';
          this.pass = '';
        }

        if(response.resp === 'confirm') {
          const alert = await this.alertController.create({
            header: 'Invalid to Register',
            subHeader: 'Please Confirm your password',
            message: 'Try Again!!',
            buttons: ['OK'],
          });
          await alert.present();
          this.pass = '';
          this.confirm = '';
        }

        if(response.resp === 'none') {
          const alert = await this.alertController.create({
            header: 'Invalid to Register',
            subHeader: 'Please fill in all missing field',
            message: 'Try Again!!',
            buttons: ['OK'],
          });
          await alert.present();
        }
      },
      async (_error: any) => {

        const alert = await this.alertController.create({
          header: 'Invalid to Register',
          subHeader: 'Please fill in all missing field',
          message: 'Try Again!!',
          buttons: ['OK'],
        });
        await alert.present();
      });

  }



  formLogin() {
    this.router.navigate(['/login']);
  }

  ionViewDidEnter() {
    this.myRand=this.random();
   }

  random(): number {
    const rand = Math.floor(Math.random()*900000)+1;
    return rand;
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
