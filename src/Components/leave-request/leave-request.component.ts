// leave-request.component.ts

import { Component, OnInit } from '@angular/core';
import { LeaveRequestServiceService } from '../../Services/leave-request-service.service';
import { LeavetypesService } from 'src/Services/leavetypes.service';
import { LeaveRequest } from 'src/Models/leaveRequest.model';
import { LeaveType } from 'src/Models/leaveType.model';
import { Employee } from 'src/Models/employe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
})
export class LeaveRequestComponent implements OnInit {

  public employee = new Employee('', '', '', '', '');
  public selectedLeaveType: LeaveType | null = null;

  public gender: string | undefined;

  leaveRequest: LeaveRequest = new LeaveRequest(this.employee, '', '', null, '', '', 2, "");
  leaveTypes: LeaveType[] = [];

  constructor(
    private leaveRequestService: LeaveRequestServiceService,
    private leaveType: LeavetypesService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    var emp = localStorage.getItem("employee");
    if (emp) {
      this.employee = JSON.parse(emp);
      console.log(this.employee);
      this.gender = this.employee.gender;
    } else {
      console.log("User not found");
    }
    const gender = this.gender || 'both';
    this.getLeaveTypes(gender);
  }


  submitForm() {
    var e = localStorage.getItem('employee');
    if (e) {
      this.employee = JSON.parse(e);
      this.leaveRequest.employeeId = this.employee;
    } else {
      console.error('Employee data not found in local storage');
      return;
    }

    if (!this.selectedLeaveType) {
      console.error('No leave type selected');
      return;
    }

    this.leaveRequest.leaveTypeId = this.selectedLeaveType;
    this.leaveRequest.managerId = 2;
    // console.log(this.leaveRequest);
    this.leaveRequestService.submitLeaveRequest(this.leaveRequest).subscribe(
      (response) => {
        // alert(response)
        this.router.navigate(['dashboard/leavestatus']) // Navigating to 'leavestatus' route
        console.log('Leave request submitted successfully:', response);
      },
      (error) => {
        console.error('Error occurred while submitting leave request:', error);
      }
    );

  }


  getLeaveTypes(gender: string) {
    this.leaveType.getLeaveTypes().subscribe((data) => {

      // Filter leave types based on gender
      if (gender === 'male') {
        this.leaveTypes = data.filter(type => type.leaveTypeName !== 'Maternity Leave');
      } else if (gender === 'female') {
        this.leaveTypes = data.filter(type => type.leaveTypeName !== 'Paternity Leave');
      } else {
        this.leaveTypes = data; // If gender is not specified or 'both', display all leave types
        // If gender is not specified or 'both', display all leave types
      }
    });
  }






}
