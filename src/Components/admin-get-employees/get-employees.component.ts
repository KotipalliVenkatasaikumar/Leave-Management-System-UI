import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAllEmployee } from 'src/Models/getAllEmployees';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {

  employees$!: Observable<GetAllEmployee[]>;

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employees$ = this.employeeService.getEmployees();
  }
  navigateToAddEmployee() {
    this.router.navigateByUrl('/admin/register')

  }


}
