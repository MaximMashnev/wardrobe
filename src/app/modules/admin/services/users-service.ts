import { ConfigService } from './../../../core/services/config-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly usersEndpoint: string;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.usersEndpoint = ConfigService.getEndpointUrl("users");
  }

  // TODO переделать
  getDataTable(find: string, page: number, limit: number, sortdata: string, secectedGroup: string): Observable<User[]> {
    page += 1;

    let url = this.usersEndpoint + "?";

    if (secectedGroup != undefined && secectedGroup != '0') {
      url += `group_id=${secectedGroup}&`
    }
    // Поиск по номеру
    if ((/[0-9]/.test(find)) && find.includes("+")) {
      url += `phoneNumber=${find}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по id
    else if (/[0-9]/.test(find)) {
      url += `id=${find}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по фио
    else if (find.split(' ').length == 3) {
      url += `surname=${find.split(' ')[0]}&name=${find.split(' ')[1]}&patronymic=${find.split(' ')[2]}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по имени и фамилии
    else if (find.split(' ').length == 2) {
      url += `surname=${find.split(' ')[0]}&name=${find.split(' ')[1]}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по фамилии
    else if (find != '') {
      url += `surname=${find}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Без поиска
    else {
      url += `page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }

    return this.http.get<User[]>(url);
  }

  deleteUser(User: User): Observable<User> {
    return this.http.delete<User>(`${this.usersEndpoint}/${User.id}`);
  }

  // TODO изменить
  editingUser(userData: User, newUserData: User): Observable<User> {
    if (newUserData != null) {
      newUserData.id = userData.id;
      return this.http.patch<User>(`${this.usersEndpoint}/${userData.id}`, newUserData);
    }
    else {
      return this.http.patch<User>(`${this.usersEndpoint}/${userData.id}`, userData);
    }
  }
}
