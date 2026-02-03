import { ConfigService } from './../../../core/services/config-service';
import { Stuff } from '../../../shared/models/stuff';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StuffService {
  private readonly dataStuffsEndpoint: string;
  private readonly stuffsEndpoint: string;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.dataStuffsEndpoint = ConfigService.getEndpointUrl("dataStuffs");
    this.stuffsEndpoint = ConfigService.getEndpointUrl("stuffs");
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataStuffsEndpoint);
  }

  getStuffs(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(this.stuffsEndpoint);
  }

  getStuff(id: number): Observable<Stuff> {
    return this.http.get<Stuff>(`${this.stuffsEndpoint}/${id}`);
  }

  getMyStuffs(id: number): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(`${this.stuffsEndpoint}?user_id=${id}`);
  }

  getMyStuffsWithCategory(id: number, category: number): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(`${this.stuffsEndpoint}?user_id=${id}&category=${category}`);
  }

  getStuffForOutfit(urlIds: string): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(`${this.stuffsEndpoint}?${urlIds}`)
  }

  addStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.post<Stuff>(this.stuffsEndpoint, stuff);
  }

  editStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.patch<Stuff>(`${this.stuffsEndpoint}/${stuff.id}`, stuff);
  }

  deleteStuff(id: number): Observable<Stuff> {
    return this.http.delete<Stuff>(`${this.stuffsEndpoint}/${id}`);
  }
}
