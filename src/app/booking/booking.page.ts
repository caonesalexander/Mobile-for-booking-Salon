/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  employee: any=[];
  services: any=[];

  selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  constructor(public _apiService: ApiService) {
    this.setToday();
    this.getEmployee();
    this.getService();
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
      console.log('SUCCESS ---', res);
      this.employee = res;
    },(error: any) =>{
      console.log('ERROR ---', error);
    });

  }

  getService() {
    this._apiService.getService().subscribe((res: any) => {
      console.log('SUCCESS ---', res);
      this.services = res;
    },(error: any) =>{
      console.log('ERROR ---', error);
    });

  }

}
