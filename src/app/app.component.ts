import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';

  constructor(
    public userService: UserService,
  ){}

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.userService.loggedIn = true;
    }
  }

  logout() {
    this.userService.logout().subscribe(
      data => {
        localStorage.removeItem('token');
        this.userService.loggedIn = false;
        console.log(data);
      },
      err => {
        localStorage.removeItem('token');
        this.userService.loggedIn = false;
      }
    )
  }
  
}
