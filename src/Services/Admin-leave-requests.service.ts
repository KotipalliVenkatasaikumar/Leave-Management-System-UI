import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLeaveRequests } from 'src/Models/AdminLeaveRequests.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  private apiUrl = 'http://localhost:8083/api/leaverequest';

  constructor(private http: HttpClient) { }

  getLeaveRequests(): Observable<AdminLeaveRequests[]> {
    return this.http.get<AdminLeaveRequests[]>(this.apiUrl);
  }

  updateLeaveRequest(request: AdminLeaveRequests): Observable<AdminLeaveRequests> {
    const url = `${this.apiUrl}/${request.requestId}`;
    return this.http.put<AdminLeaveRequests>(url, request);
  }
}
