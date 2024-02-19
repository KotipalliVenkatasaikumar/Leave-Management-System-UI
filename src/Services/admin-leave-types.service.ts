import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveType } from 'src/Models/leaveType.model';

@Injectable({
  providedIn: 'root'
})
export class AdminLeaveTypesService {

  private apiUrl = 'http://localhost:8083/api/leave'; 

  constructor(private http:HttpClient) { }
  
  ListOfLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(this.apiUrl);
  }


}
