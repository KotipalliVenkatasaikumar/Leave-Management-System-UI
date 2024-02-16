import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    // Check if user is logged in
    return localStorage.getItem('employee') !== null;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']); 
  }
}
