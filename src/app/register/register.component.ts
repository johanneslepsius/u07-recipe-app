import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  
  submitReg(regForm): any {
    this.userService.register(regForm.email, regForm.name, regForm.password).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.userService.loggedIn = true;
      }
    )

  }

}
