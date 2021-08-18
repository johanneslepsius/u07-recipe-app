import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

interface Logindata {
  message: string,
  user: User,
  token: string
  }

interface User {
  created_at: string,
  email: string,
  email_verified_at: any,
  id: number,
  name: string,
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  loggedIn = false;
  
  skipToken = new HttpHeaders()
      .set('skip', 'true');

  user: User;
  
  constructor(private http: HttpClient) { }

  

  register(email: string, name: string, password: string): Observable<Logindata>  {
    return this.http.post<any>(`${environment.user_api}/register`, {'email': email, 'name': name, 'password': password}, {'headers': this.skipToken});
  }

  login(email: string, password: string): Observable<Logindata>  {
    return this.http.post<any>(`${environment.user_api}/login`, {'email': email, 'password': password}, {'headers': this.skipToken});
  }

  logout() {
    return this.http.get<any>(`${environment.user_api}/logout`);
  }

}
