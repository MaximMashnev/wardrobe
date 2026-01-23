import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { publicUserInfo } from '../models/publicUserInfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://7a70416d1ec137c0.mokky.dev/';

  constructor(
    private http: HttpClient,
  ) {}

  registrationUser(username: string, email: string, password: string): Observable<any> {
    const user = new User(email, username, password);
    return this.http.post<User>(this.baseUrl + "register", user);
  }

  authorizationUser(username: string , password: string): Observable<any> {
    return this.http.post<User>(
      this.baseUrl + 'auth',
      {
          "username": username,
          "password": password
      });
  }

  getMe(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'auth_me');
  }

  getUserInfo(userId: number): Observable<publicUserInfo>{
    return this.http.get<publicUserInfo>(this.baseUrl + "users/" + userId  + "?"+ "_select=-email,-password,-role");
  }

  getUsersInfo(url: string): Observable<publicUserInfo>{
    return this.http.get<publicUserInfo>(this.baseUrl + "users?" + url + "_select=-email,-password,-role");
  }
}
