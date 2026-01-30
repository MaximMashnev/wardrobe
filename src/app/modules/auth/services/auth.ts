import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../../shared/models/user';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'https://7a70416d1ec137c0.mokky.dev/';
  private user: User | null = null;

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

  isAuthenticated(): Observable<boolean> {
    return this.getMe().pipe(
      map((data) => {
        this.user = data;
        return true;
      }),
      catchError((err) => {
        this.user = null;
        return of(false);
      })
    );
  }

  isAdmin(): Observable<boolean> {
    return this.getMe().pipe(
      map((data) => {
        this.user = data;
        if(data.role == "admin") {
          return true;
        }
        return false;
      }),
      catchError((err) => {
        this.user = null;
        return of(false);
      })
    );
  }

  getUser(): User | null {
    return this.user;
  }
}
