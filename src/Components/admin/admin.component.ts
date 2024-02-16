import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.navigateToLeaveRequests();
  }

  navigateToLeaveRequests() {
    // this.router.navigate(['/leaverequest']);
     this.router.navigate(['admin/leaverequests'])
  }



}
