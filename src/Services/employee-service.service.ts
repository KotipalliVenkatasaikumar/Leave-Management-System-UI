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
  

  //post
  registerEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employeeData);
  }


 //getall
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  
 //edit
 updateEmployee(employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.apiUrl}/${employee.employeeId}`, employee);
}

//delete
deleteEmployee(employeeId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${employeeId}`);
}



}
