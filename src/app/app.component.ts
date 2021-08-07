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
    private userService: UserService,
  ){}

  ngOnInit() {
    
  }

  logout() {
    this.userService.logout().subscribe(
      data => {
        // localStorage.removeItem('token');
        console.log("hello, bitch");
      }
    )
  }
  
}
