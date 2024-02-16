import { Component, OnInit } from '@angular/core';
import { LeaveBalance } from 'src/Models/LeaveBalance.model';
import { LeaveBalanceService } from 'src/Services/leave-balance.service';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {
  
  leaveBalance: LeaveBalance[] = [];
  employeeId: number | null = null;

  constructor(private leaveBalanceService: LeaveBalanceService) { }

  ngOnInit(): void {
    const storedEmployeeId = localStorage.getItem('employeeId');
    if (storedEmployeeId) {
      this.employeeId = parseInt(storedEmployeeId, 10);
      this.loadLeaveBalance();
    } else {
      console.error('EmployeeId not found in local storage.');
    }
  }

  loadLeaveBalance(): void {
    if (this.employeeId !== null) {
      this.leaveBalanceService.getLeaveBalance(this.employeeId).subscribe(
        (leaveBalances: LeaveBalance[]) => {
          console.log(leaveBalances);
          this.leaveBalance = leaveBalances;
        
        },
        (error: any) => {
          console.error('Error fetching leave balance:', error);
        }
      );
    } else {
      console.error('EmployeeId is null.');
    }
  }
}
