import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LeaveType } from 'src/Models/leaveType.model';
import { AdminLeaveTypesService } from 'src/Services/admin-leave-types.service';
import { LeavetypesService } from 'src/Services/leavetypes.service';

@Component({
  selector: 'app-get-leave-types',
  templateUrl: './get-leave-types.component.html',
  styleUrls: ['./get-leave-types.component.css']
})
export class GetLeaveTypesComponent implements OnInit {




  constructor(private getleaveTypes: AdminLeaveTypesService, private router: Router) { }

  // listOfLeaves$!: Observable<LeaveType[]>;
  adminLeaveLeaveTypes: LeaveType[] | undefined;
  //  adminLeaveRequests: AdminLeaveRequests[] | undefined;

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests() {
    this.getleaveTypes.ListOfLeaveTypes().subscribe(requests => {

      console.log(requests)
      this.adminLeaveLeaveTypes = requests;


    });
  }

  navigateToAddLeaveType(): void {
    this.router.navigateByUrl('admin/addLeaveType');
  }
}




