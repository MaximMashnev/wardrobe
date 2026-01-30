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

  getUserInfo(userId: number): Observable<publicUserInfo> {
    return this.http.get<publicUserInfo>(this.baseUrl + "users/" + userId  + "?"+ "_select=-email,-password,-role");
  }

  getUsersInfo(url: string): Observable<publicUserInfo[]> {
    return this.http.get<publicUserInfo[]>(this.baseUrl + "users?" + url + "_select=-email,-password,-role");
  }

  editProfile(user: User): Observable<User> {
    return this.http.patch<User>(this.baseUrl + "users/" + user.id!, user);
  }

  getMe(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'auth_me');
  }
}
