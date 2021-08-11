import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  failedLogin: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  

  submitLog(loginForm): any {
    this.failedLogin = false;
    this.userService.login(loginForm.email, loginForm.password).subscribe(
      data => {
          this.userService.loggedIn = true;
          localStorage.setItem("token", data.token);
          this.userService.user = data.user;
          console.log(this.userService.loggedIn);
          this.router.navigate(['recipes']);
        },
      err => {
        this.failedLogin = true;
      }
    );
  }


}
