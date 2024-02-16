import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Services/login-service.service';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto: LoginDTO = new LoginDTO("", "");

  constructor(private loginServiceService: LoginServiceService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.loginServiceService.login(this.loginDto.email, this.loginDto.password).subscribe(response => {
      
      if (response && response.role === "manager") {
        
        localStorage.setItem("employee", JSON.stringify(response));
        localStorage.setItem("employeeId", response.employeeId);
        console.log('Logged in successfully:', response);
        this.router.navigate(['/admin']);
      } else if (response) {
        console.log('Logged in successfully: id', response.employeeId);
        localStorage.setItem("employee", JSON.stringify(response));
        localStorage.setItem("employeeId", response.employeeId);
        console.log('Logged in successfully:', response);
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Authentication failed');
        alert("User Not Registered");
      }
    });
  }
}
