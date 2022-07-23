import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

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
