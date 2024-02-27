import { Component, OnInit } from '@angular/core';
import { LeaveRequestServiceService } from '../../Services/leave-request-service.service';
import { LeavetypesService } from 'src/Services/leavetypes.service';
import { LeaveRequest } from 'src/Models/leaveRequest.model';
import { LeaveType } from 'src/Models/leaveType.model';
import { Employee } from 'src/Models/employe.model';
import { Router } from '@angular/router';
import { LeaveBalanceService } from 'src/Services/leave-balance.service';
import { LeaveBalance } from 'src/Models/LeaveBalance.model';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
})
export class LeaveRequestComponent implements OnInit {

  public employee = new Employee(0, '', '', '', '', '');
  leavetype:LeaveType=new LeaveType(0,"",0)
  public selectedLeaveType: LeaveType | null = null;
  public gender: string | undefined;
  public employeeId!: number;
  leaveRequest: LeaveRequest = new LeaveRequest(this.employee, '', '', null, '', '', 2, "",0);
  public selectedLeaveBalance:LeaveBalance[]=[];
  leaveTypes: LeaveType[] = [];
  leaveBalances: LeaveBalance[] = [];
  remainingLeaveBalances: Map<number, number> = new Map<number, number>();

  constructor(
    private leaveRequestService: LeaveRequestServiceService,
    private leaveType: LeavetypesService,
    private router: Router,
    private leaveBalance: LeaveBalanceService,
  ) {

   }

  ngOnInit(): void {
    var emp = localStorage.getItem("employee");
    if (emp) {
      this.employee = JSON.parse(emp);
      console.log(this.employee);
      this.gender = this.employee.gender;
      this.employeeId = this.employee.employeeId
    } else {
      console.log("User not found");
    }
    const gender = this.gender || 'both';
    this.getLeaveTypes(gender);
    this.loadLeaveBalance();
  }

  submitForm() {
    var e = localStorage.getItem('employee');
    if (e) {
      this.employee = JSON.parse(e);
      this.leaveRequest.employee = this.employee;
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

    this.leaveRequestService.submitLeaveRequest(this.leaveRequest).subscribe(
      (response) => {
        
        this.router.navigate(['dashboard/leavestatus']);
        console.log('Leave request submitted successfully:', response);
      },
      (error) => {
        console.error('Error occurred while submitting leave request:', error);
      }
    );
  }

  getLeaves(){
    if (!this.selectedLeaveType) {
      console.error('No leave type selected');
      return;
    }
    const leaveTypeName = this.selectedLeaveType.leaveTypeName;
    if(leaveTypeName!=null){
      this.selectedLeaveBalance= this.leaveBalances.filter(balance => balance.leaveType.leaveTypeName === leaveTypeName);
    }
    console.log(this.selectedLeaveBalance);
  // this.currentLeaves=filteredBalances.
  }

  getLeaveTypes(gender: string) {
    this.leaveType.getLeaveTypes().subscribe((data) => {
      if (gender === 'male') {
        this.leaveTypes = data.filter(type => type.leaveTypeName !== 'Maternity Leave');
      } else if (gender === 'female') {
        this.leaveTypes = data.filter(type => type.leaveTypeName !== 'Paternity Leave');
      } else {
        this.leaveTypes = data;
      }
    });
  }

  loadLeaveBalance(): void {
    if (this.employeeId !== null) {
      this.leaveBalance.getLeaveBalance(this.employeeId).subscribe((leaveBalances: LeaveBalance[]) => {
         console.log(leaveBalances);
         this.leaveBalances = leaveBalances;
          // this.updateLeaveBalances();
        },
        (error: any) => {
          console.error('Error fetching leave balance:', error);
        }
      );
    } else {
      console.error('EmployeeId is null.');
    }
  }

  updateLeaveBalances(): void {
    this.leaveBalances.forEach(balance => {
      this.remainingLeaveBalances.set(balance.leaveType.leaveTypeId, balance.leaveBalance);
    });
  }

  getRemainingLeaveBalance(leaveTypeId: number): number {
    return this.remainingLeaveBalances.get(leaveTypeId) || 0;
  }
  
}
