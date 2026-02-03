import { ConfigService } from './../../core/services/config-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { publicUserInfo } from '../models/publicUserInfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersEndpoint: string;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.usersEndpoint = ConfigService.getEndpointUrl("users");
  }

  getUserInfo(userId: number): Observable<publicUserInfo> {
    return this.http.get<publicUserInfo>(`${this.usersEndpoint}/${userId}?_select=-email,-password,-role`);
  }

  getUsersInfo(url: string): Observable<publicUserInfo[]> {
    return this.http.get<publicUserInfo[]>(`${this.usersEndpoint}?${url}_select=-email,-password,-role`);
  }
}
