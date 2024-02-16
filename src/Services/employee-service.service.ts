import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Models/employe.model';
import { GetAllEmployee } from 'src/Models/getAllEmployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
   

  
   private apiUrl = 'http://localhost:8080/api/employee'; 

  constructor(private http: HttpClient) {
    
  }

  registerEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employeeData);
  }


 
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }


}
