import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public pass: any;
  public customers=[];
  constructor(
    private router: Router,
    public apiService: ApiService
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


}
