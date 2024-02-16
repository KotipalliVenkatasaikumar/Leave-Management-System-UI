import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveType } from 'src/Models/leaveType.model';

@Injectable({
  providedIn: 'root'
})
export class LeavetypesService {

  private apiUrl = 'http://localhost:8083/api/leave'; 

  constructor(private http: HttpClient) { }

  getLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(this.apiUrl);
  }

   addLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.http.post<LeaveType>(`${this.apiUrl}`, leaveType );
  }

}
