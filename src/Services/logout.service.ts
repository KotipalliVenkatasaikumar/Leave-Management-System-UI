import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiUrl = 'http://localhost:8080/employee/logout'; 

  constructor(private http: HttpClient) { }

  logout(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}`, {});
  }
}
