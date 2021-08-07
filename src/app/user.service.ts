import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

interface Logindata {
  message: string,
  token: string
  }



// let headers = new HttpHeaders()
  // .set('Authorization', `Bearer ${localStorage.token}`);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn = false;

  skipToken = new HttpHeaders()
    .set('skip', 'true');

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string): Observable<Logindata>  {
    return this.http.post<any>(`${environment.user_api}/register`, {'email': email, 'username': username, 'password': password}, {'headers': this.skipToken});
  }

  login(email: string, password: string): Observable<Logindata>  {
    return this.http.post<any>(`${environment.user_api}/login`, {'email': email, 'password': password});
  }

  logout() {
    return this.http.get<any>(`${environment.user_api}/logout`);
  }

}
