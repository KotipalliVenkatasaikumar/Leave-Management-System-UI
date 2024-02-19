import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/Models/employe.model';
import { GetAllEmployee } from 'src/Models/getAllEmployees';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {
public employees:Employee[]=[];

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }



  navigateToEditEmployee(employee:Employee) {
    console.log(employee)
    this.router.navigate(['/admin/editemployee'], { state: { employee: employee } });
    
    }

    
    navigateToEDeletemployee(employee: Employee) {
      if (confirm('Are you sure you want to delete this employee?')) {
        this.employeeService.deleteEmployee(employee.employeeId).subscribe(
          () => {
            console.log('Employee deleted successfully.');
            this.getEmployees(); // Refresh employee list after deletion
          },
          (error: any) => {
            console.error('Error deleting employee:', error);
          }
        );
      }
    }
    

  getEmployees(): void {
   this.employeeService.getEmployees().subscribe((r)=>{
    this.employees = r;
   });
  }


  navigateToAddEmployee() {
    this.router.navigateByUrl('/admin/register')
  }


}
