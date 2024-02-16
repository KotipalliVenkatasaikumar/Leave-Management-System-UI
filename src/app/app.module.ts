// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../Components/register/register.component';
import { LoginComponent } from '../Components/login/login.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { LeaveRequestComponent } from '../Components/leave-request/leave-request.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { LeaveRequestsComponent } from '../Components/admin-leave-requests/leave-requests.component';
import { GetEmployeesComponent } from '../Components/admin-get-employees/get-employees.component';

import { GetLeaveTypesComponent } from '../Components/admin-get-leave-types/get-leave-types.component';
import { LeaveStatusComponent } from '../Components/leave-status/leave-status.component';
import { LeaveBalanceComponent } from '../Components/leave-balance/leave-balance.component';
import { MyLeavesComponent } from '../Components/my-leaves/my-leaves.component';
import { AddLeaveTypeComponent } from '../Components/add-leave-type/add-leave-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RejectionDialogComponent } from './rejection-dialog/rejection-dialog.component'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LeaveRequestComponent,
    AdminComponent,
    LeaveRequestsComponent,
    GetEmployeesComponent,
    GetLeaveTypesComponent,
    LeaveStatusComponent,
    LeaveBalanceComponent,
    MyLeavesComponent,
    AddLeaveTypeComponent,
    RejectionDialogComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
