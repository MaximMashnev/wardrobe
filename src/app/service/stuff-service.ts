import { Stuff } from './../models/stuff';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StuffService {
  private baseUrl = 'https://7a70416d1ec137c0.mokky.dev/';

  constructor(
    private http: HttpClient,
  ) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "data-stuffs");
  }

  getStuffs(): Observable<Stuff> {
    return this.http.get<Stuff>(this.baseUrl + "stuffs");
  }

  getStuff(id: number): Observable<Stuff> {
    return this.http.get<Stuff>(this.baseUrl + "stuffs" + "/" + id);
  }

  addStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.post<Stuff>(this.baseUrl + "stuffs", stuff);
  }

  editStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.patch<Stuff>(this.baseUrl + "stuffs" + "/" + stuff.id, stuff);
  }

  deleteStuff(id: number): Observable<Stuff> {
    return this.http.delete<Stuff>(this.baseUrl + "stuffs" + "/"  + id);
  }

  getMyStuffs(id: number): Observable<Stuff> {
    return this.http.get<Stuff>(this.baseUrl + "stuffs" + "?user_id="  + id);
  }

  getMyStuffsWithCategory(id: number, category: number) {
    return this.http.get<Stuff>(this.baseUrl + "stuffs" + "?user_id="  + id + "&" + "category=" + category);
  }
}
