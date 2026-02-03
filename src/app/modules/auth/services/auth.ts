import { ConfigService } from './../../../core/services/config-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../../shared/models/user';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly registerEndpoint: string;
  private readonly authMeEndpoint: string;
  private readonly authEndpoint: string;

  private user: User | null = null;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.registerEndpoint = ConfigService.getEndpointUrl("register");
    this.authMeEndpoint = ConfigService.getEndpointUrl("authMe");
    this.authEndpoint = ConfigService.getEndpointUrl("auth");
  }

  registrationUser(username: string, email: string, password: string): Observable<any> {
    const user = new User(email, username, password);
    return this.http.post<User>(this.registerEndpoint, user);
  }

  authorizationUser(username: string , password: string): Observable<any> {
    return this.http.post<User>(
      this.authEndpoint,
      {
        "username": username,
        "password": password
      });
  }

  getMe(): Observable<User> {
    return this.http.get<User>(this.authMeEndpoint);
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
    console.log(this.user);
    return this.user;
  }
}
