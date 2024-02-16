import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LeaveRequest } from 'src/Models/leaveRequest.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestServiceService {
  private apiUrl = 'http://localhost:8083/api/leaverequest/save';

  constructor(private http: HttpClient) {

   }

  submitLeaveRequest(leaveRequest: LeaveRequest): Observable<any> {
    console.log(leaveRequest)
    return this.http.post(this.apiUrl, leaveRequest);
  }
}





