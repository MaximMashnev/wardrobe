import { ConfigService } from './../../../core/services/config-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly usersEndpoint: string;

  constructor (
    private http: HttpClient,
    ConfigService: ConfigService
  ){
    this.usersEndpoint = ConfigService.getEndpointUrl("users")
  }

  editProfile(user: User): Observable<User> {
    return this.http.patch<User>(`${this.usersEndpoint}/${user.id}`, user);
  }
}
