import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService, 
  ) { }

  ngOnInit(): void {
  }

  

  onSubmit(loginForm): any {
    console.log(loginForm);
    this.userService.login(loginForm.email, loginForm.password).subscribe(
      data => {
        if (data.message === "Login Successful")
          this.userService.loggedIn = true;
          localStorage.setItem("token", data.token);
          console.log(data);
          console.log(this.userService.loggedIn);
      }
    );
  }

}
