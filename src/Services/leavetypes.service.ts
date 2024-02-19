import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { LeaveType } from 'src/Models/leaveType.model';

@Injectable({
  providedIn: 'root'
})
export class LeavetypesService {
 
 
  private apiUrl = 'http://localhost:8083/api/leave';

  constructor(private http: HttpClient) { }


  //getall
  getLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(this.apiUrl);
  }

  //add
  addLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.http.post<LeaveType>(`${this.apiUrl}`, leaveType);
  }

  //edit
  updateLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.http.put<LeaveType>(`${this.apiUrl}/${leaveType.leaveTypeId}`, leaveType);

  }
    //delete
    deleteLeaveType(leaveTypeId: number):Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${leaveTypeId}`);
  }


 
}
