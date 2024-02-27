import { Component, OnInit } from '@angular/core';
import { AdminLeaveRequests } from 'src/Models/AdminLeaveRequests.model';
import { LeaveRequestsService } from 'src/Services/Admin-leave-requests.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {

  adminLeaveRequests: AdminLeaveRequests[] | undefined;
  rejectionMessage: string = ''; // Added variable to store rejection message

  constructor(private leaveRequestsService: LeaveRequestsService) {}

  ngOnInit() {
    this.loadLeaveRequests();
  }

  loadLeaveRequests() {
    this.leaveRequestsService.getLeaveRequests().subscribe(requests => {
      console.log(requests);
      this.adminLeaveRequests = requests;
      console.log(this.adminLeaveRequests);
      
    });
  }


  acceptRequest(request: AdminLeaveRequests) {
    request.status = "Approved";
    request.description="okay"

    this.leaveRequestsService.updateLeaveRequest(request).subscribe(() => {
      this.loadLeaveRequests();
      console.log(request);
    });
  }

  rejectRequest(request: AdminLeaveRequests) {
    if (!this.rejectionMessage) {
      const rejectionMessage = prompt('Please provide a rejection message');
      if (rejectionMessage !== null) {
        // If user provided a rejection message
        request.status = "Rejected";
        request.description = rejectionMessage;
        this.leaveRequestsService.updateLeaveRequest(request).subscribe(() => {
          this.loadLeaveRequests();
        });
      }
    } else {
      // If a rejection message was provided previously
      request.status = "Rejected";
      request.description = this.rejectionMessage; 
      this.leaveRequestsService.updateLeaveRequest(request).subscribe(() => {
        this.loadLeaveRequests();
        console.log(request);
        this.rejectionMessage='';
      });
    }
  }
}  