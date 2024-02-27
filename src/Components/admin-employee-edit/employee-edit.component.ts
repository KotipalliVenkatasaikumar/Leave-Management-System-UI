import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/employe.model';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
 

  constructor( private employeeService: EmployeeServiceService , private router:Router) { }


  employee: Employee = new Employee(0,"", "", "", "", "");

  ngOnInit(): void {
   this.employee=history.state.employee;
   console.log(this.employee.email)
    }

    onSubmit(): void {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => {
          console.log('Employee updated successfully.');
          
          this.router.navigate(['/admin/employees']); // Navigate to employee list page
        },
        (error: any) => {
          console.error('Error updating employee:', error);
        }
      );
    }
   

}
