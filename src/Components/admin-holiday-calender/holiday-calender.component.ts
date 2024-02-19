import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Holiday } from 'src/Models/holiday.model';
import { HolidaycalenderService } from 'src/Services/holidaycalender.service';

@Component({
  selector: 'app-holiday-calender',
  templateUrl: './holiday-calender.component.html',
  styleUrls: ['./holiday-calender.component.css']
})
export class HolidayCalenderComponent implements OnInit {



  holiday: Holiday = new Holiday(0, "", "")

  holidays: Holiday[] | undefined


  constructor(private holidayService: HolidaycalenderService, private router: Router) { }

  ngOnInit(): void {
    this.getHolidays();
  }


  getHolidays() {
    this.holidayService.getHolidays().subscribe(holidays => {
      console.log(holidays)
      this.holidays = holidays;

    })
  }

  navigateToEditHoliday(holiday: Holiday) {
    console.log(holiday)
    this.router.navigate(['/admin/editHoliday'], { state: { holiday: holiday } });
  }


  navigateToAddHoliday() {
    this.router.navigateByUrl('admin/addHoliday');
  }


  navigateToEDeleteHoliday(holiday: Holiday) {
    if (confirm('Are you sure you want to delete this Holiday?')) {
      this.holidayService.deleteLeaveType(holiday.id).subscribe(
        () => {
          console.log('Holiday deleted successfully.');
          this.getHolidays(); // Refresh holiday list after deletion
        },
        (error: any) => {
          console.error('Error deleting holiday:', error);
        }
      );
    }
  }

}
