import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  failedReg: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  
  submitReg(regForm): any {
    localStorage.clear();
    this.failedReg = false;
    this.userService.register(regForm.email, regForm.name, regForm.password).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        this.userService.loggedIn = true;
        this.router.navigate(['/recipes']);
      },
      err => {
        this.failedReg = true;
      }
    )

  }

}
