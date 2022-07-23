import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  constructor() {
    this.setToday();
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

}
