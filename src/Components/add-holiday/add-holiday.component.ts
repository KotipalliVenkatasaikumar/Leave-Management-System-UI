import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Holiday } from 'src/Models/holiday.model';
import { HolidaycalenderService } from 'src/Services/holidaycalender.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {

  holiday: Holiday = new Holiday(0, '', ""); // Define the holiday object

  holidaySuccess: boolean = false; // Initialize the holidaySuccess property

  constructor(private holidayService: HolidaycalenderService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.holidayService.addLeaveType(this.holiday).subscribe(response => {
      if (response !== null) {
        this.holidaySuccess = true;
        console.log("Holiday added successfully!");
        this.router.navigate(['/admin/holidayCalender']); // Navigate to holiday calendar page
      }
    });
  }
}
