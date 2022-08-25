import { Injectable } from '@angular/core';
import { Observable, observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ICustomer } from './customize';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods' , 'GET,POST,PUT,DELETE,OPTIONS');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  }

  getEmployee() {
    return this.http.get('http://localhost/RestAPI/getEmployee.php');
  }

  getService() {
    return this.http.get('http://localhost/RestAPI/getService.php');
  }

  getCustomer() {
    return this.http.get('http://localhost/RestAPI/getCustomer.php');
  }

  getStudent(){
    return this.http.get('http://localhost/RestAPI/getName.php');

  }

}

