import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveBalance } from 'src/Models/LeaveBalance.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveBalanceService {
  private apiUrl = 'http://localhost:8083/api/leaveBalance/employee';

  constructor(private http: HttpClient) { }

  getLeaveBalance(employeeId: number): Observable<LeaveBalance[]> {
    const url = `${this.apiUrl}/${employeeId}`;
    return this.http.get<LeaveBalance[]>(url).pipe(
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
