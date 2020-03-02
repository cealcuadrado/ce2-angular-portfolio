import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date = new Date();

  constructor() { }

  getDate(): Date {
    return this.date;
  }
}
