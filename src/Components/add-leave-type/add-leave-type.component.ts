import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveType } from 'src/Models/leaveType.model';
import { LeavetypesService } from 'src/Services/leavetypes.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  leaveType: LeaveType = new LeaveType(0, "", 0);
  leaveTypeSuccess: boolean = false;
  @ViewChild('leaveTypeForm') leaveTypeForm!: NgForm;

  constructor(private leaveTypeService: LeavetypesService) { }

  ngOnInit(): void {
  }
  
  submitForm() {
    if (this.leaveTypeForm.valid) {
      this.leaveTypeService.addLeaveType(this.leaveType).subscribe(response => {
        if (response !== null) {
          this.leaveTypeSuccess = true;
          console.log("Leave type added successfully!");
        }
      });
    }
  }
}
