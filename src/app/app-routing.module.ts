import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { LeaveRequestComponent } from '../Components/leave-request/leave-request.component';
import { AdminComponent } from 'src/Components/admin/admin.component';
import { LeaveRequestsComponent } from 'src/Components/admin-leave-requests/leave-requests.component';
import { GetEmployeesComponent } from 'src/Components/admin-get-employees/get-employees.component';
import { GetLeaveTypesComponent } from 'src/Components/admin-get-leave-types/get-leave-types.component';
import { LeaveStatusComponent } from 'src/Components/leave-status/leave-status.component';
import { LeaveBalanceComponent } from 'src/Components/leave-balance/leave-balance.component';
import { MyLeavesComponent } from 'src/Components/my-leaves/my-leaves.component';
import { AddLeaveTypeComponent } from 'src/Components/add-leave-type/add-leave-type.component';
import { EmployeeEditComponent } from 'src/Components/admin-employee-edit/employee-edit.component';
import { HolidayCalenderComponent } from 'src/Components/admin-holiday-calender/holiday-calender.component';
import { LeaveTypeEditComponent } from 'src/Components/admin-leave-type-edit/leave-type-edit.component';
import { AddHolidayComponent } from 'src/Components/add-holiday/add-holiday.component';
import { EditHolidayComponent } from 'src/Components/edit-holiday/edit-holiday.component';
import { UserHolidayCalenderComponent } from 'src/Components/user-holiday-calender/user-holiday-calender.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },

  
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'leaverequest', component: LeaveRequestComponent,
      },
      {
        path: 'leavestatus', component: LeaveStatusComponent
      },
      {
        path: 'leavebalance', component: LeaveBalanceComponent
      },
      {
        path: 'myleaves', component: MyLeavesComponent
      },
      {
        path: 'userholidayCalender', component: UserHolidayCalenderComponent
      },



    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'leaverequests',
        component: LeaveRequestsComponent
      },
      {
        path: 'employees',
        component: GetEmployeesComponent
      },

      {
        path: 'leavetypes',
        component: GetLeaveTypesComponent
      },
      {
        path: 'addLeaveType',
         component:AddLeaveTypeComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'editemployee', component: EmployeeEditComponent
      },
      {
        path: 'holidayCalender', component: HolidayCalenderComponent
      },
      {
        path: 'editLeaveType', component:LeaveTypeEditComponent
      },
      {
        path : 'addHoliday', component:AddHolidayComponent
      },
      {
        path: 'editHoliday', component:EditHolidayComponent
      }



    ]
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
