import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LeaveRequest } from 'src/Models/leaveRequest.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveStatusService {

  private apiUrl = 'http://localhost:8083/api/leaverequest/employee';

  constructor(private http: HttpClient) { }

  getLeaveRequestsByEmployeeId(employeeId: number): Observable<LeaveRequest[]> {
    const url = `${this.apiUrl}/${employeeId}`;
    return this.http.get<LeaveRequest[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something went wrong; please try again later.');
  }
}
