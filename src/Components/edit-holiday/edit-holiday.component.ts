import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Holiday } from 'src/Models/holiday.model';
import { HolidaycalenderService } from 'src/Services/holidaycalender.service';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.css']
})
export class EditHolidayComponent implements OnInit {
holidaySuccess: any;




  constructor(private holidayservice :HolidaycalenderService ,private router:Router) {

   }

holiday:Holiday =new Holiday(0,'',"");

  ngOnInit(): void {
    this.holiday=history.state.holiday
    console.log(this.holiday.name)
  }

  onSubmit(): void {
    this.holidayservice.updateLeaveType(this.holiday).subscribe(
      () => {
        console.log('holiday type updated successfully.');
        this.router.navigate(['/admin/holidayCalender']); // Navigate to leave types list page
      },
      (error: any) => {
        console.error('Error updating holiday:', error);
      }
    );
  }





}
