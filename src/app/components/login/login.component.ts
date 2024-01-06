import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string ='';

  constructor(private authService: AuthService,private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Handle successful login
        console.log(response);
        if(response.access_token){
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/']);

        }
      },
      error => {
        // Handle error
        console.log(error);
      }
    );
  }
}