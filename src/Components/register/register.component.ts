import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../Services/employee-service.service';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/employe.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationSuccess = false;
  employee: Employee = new Employee(0,"", "", "", "", "");

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  registerEmployee(): void {
    console.log(this.employee);
    this.employeeService.registerEmployee(this.employee).subscribe((response: any) => {
      // alert(JSON.stringify(response))
      if (response !== null) {
        this.registrationSuccess = true;
        alert("Registered successfully")
      }

      // Reset the form
      this.employee = {
        employeeId:0,
        employeeName: '',
        gender: '',
        email: '',
        password: '',
        role: '',
      };
    });
  }
}
