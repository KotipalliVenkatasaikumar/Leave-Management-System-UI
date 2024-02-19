import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveType } from 'src/Models/leaveType.model';
import { LeavetypesService } from 'src/Services/leavetypes.service';

@Component({
  selector: 'app-leave-type-edit',
  templateUrl: './leave-type-edit.component.html',
  styleUrls: ['./leave-type-edit.component.css']
})
export class LeaveTypeEditComponent implements OnInit {

  constructor(private leaveTypeService:LeavetypesService , private router:Router) { }

  leaveType:LeaveType=new LeaveType(0,"",0)

  ngOnInit(): void {
    this.leaveType=history.state.leaveType
    console.log(this.leaveType.leaveTypeId)
  }

  onSubmit(): void {
    this.leaveTypeService.updateLeaveType(this.leaveType).subscribe(
      () => {
        console.log('Leave type updated successfully.');
        this.router.navigate(['/admin/leavetypes']); // Navigate to leave types list page
      },
      (error: any) => {
        console.error('Error updating leave type:', error);
      }
    );
  }

}
