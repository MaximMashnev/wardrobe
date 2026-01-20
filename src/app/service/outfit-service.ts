import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Outfit } from '../models/outfit';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OutfitService {
  private baseUrl = 'https://7a70416d1ec137c0.mokky.dev/';

  constructor(
    private http: HttpClient,
  ) {}

  getOutfits(): Observable<Outfit> {
    return this.http.get<Outfit>(this.baseUrl + "outfits");
  }

  getOutfit(id: number): Observable<Outfit> {
    return this.http.get<Outfit>(this.baseUrl + "outfits" + "/" + id);
  }

  addOutfit(Outfit: Outfit): Observable<Outfit> {
    return this.http.post<Outfit>(this.baseUrl + "outfits", Outfit);
  }

  editOutfit(Outfit: Outfit): Observable<Outfit> {
    return this.http.patch<Outfit>(this.baseUrl + "outfits" + "/" + Outfit.id, Outfit);
  }

  deleteOutfit(id: number): Observable<Outfit> {
    return this.http.delete<Outfit>(this.baseUrl + "outfits" + "/"  + id);
  }
}
