import { Component, OnInit } from '@angular/core';
import { Holiday } from 'src/Models/holiday.model';
import { HolidaycalenderService } from 'src/Services/holidaycalender.service';

@Component({
  selector: 'app-user-holiday-calender',
  templateUrl: './user-holiday-calender.component.html',
  styleUrls: ['./user-holiday-calender.component.css']
})
export class UserHolidayCalenderComponent implements OnInit {

  constructor(private holidayService: HolidaycalenderService) { }

  holidays: Holiday[] = [];

  ngOnInit(): void {
    this.getHolidays(); // Fetch holidays when the component initializes
  }

  getHolidays() {
    this.holidayService.getHolidays().subscribe(holidays => {
      console.log(holidays);
      this.holidays = holidays;
    });
  }

}
