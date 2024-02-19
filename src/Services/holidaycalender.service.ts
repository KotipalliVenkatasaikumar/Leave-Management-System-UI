import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from 'src/Models/holiday.model';

@Injectable({
  providedIn: 'root'
})
export class HolidaycalenderService {
  
  private apiUrl = 'http://localhost:8083/api/holidays';

  constructor(private http:HttpClient) { }

  getHolidays(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.apiUrl);
      }

  deleteLeaveType(id: number): Observable<void> { 
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateLeaveType(holiday: Holiday): Observable<Holiday> {
    const url = `${this.apiUrl}/${holiday.id}`;
    return this.http.put<Holiday>(url, holiday);
  }
  
  addLeaveType(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>(this.apiUrl, holiday);
  }

}
