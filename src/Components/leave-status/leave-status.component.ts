import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/Models/leaveRequest.model';
import { LeaveStatusService } from 'src/Services/leave-status.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  leaveRequests: LeaveRequest[] = [];
  employeeId: number | null = null;

  constructor(private leaveStatusService: LeaveStatusService) { }

  ngOnInit(): void {
    const storedEmployeeId = localStorage.getItem('employeeId');
    if (storedEmployeeId) {
      this.employeeId = parseInt(storedEmployeeId, 10);
      this.fetchLeaveRequests();
    } else {
      console.error('EmployeeId not found in local storage.');
    }
  }

  fetchLeaveRequests(): void {
    if (this.employeeId) {
      this.leaveStatusService.getLeaveRequestsByEmployeeId(this.employeeId).subscribe(
        (leaveRequest: LeaveRequest[]) => {
          this.leaveRequests = leaveRequest;
        },
        (error: any) => {
          console.error('Error fetching leave requests:', error);
        }
      );
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Pending':
        return '#ccc'; 
      case 'Approved':
        return '#4CAF50'; 
      case 'Rejected':
        return '#f44336'; 
      default:
        return ''; 
    }
  }
}
