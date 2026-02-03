import { ConfigService } from './../../../core/services/config-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Outfit } from '../../../shared/models/outfit';
import { Observable } from 'rxjs/internal/Observable';

interface DataOutfits {
  [key: string] : [
    {
      "id" : number,
      "name" : string
    }
  ],
}

@Injectable({
  providedIn: 'root',
})
export class OutfitService {
  private readonly outfitEndpoint: string;
  private readonly dataOutfitEndpoint: string;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.outfitEndpoint = ConfigService.getEndpointUrl("outfits");
    this.dataOutfitEndpoint = ConfigService.getEndpointUrl("dataOutfits");
  }

  getDataOutfits(): Observable<DataOutfits> {
    return this.http.get<DataOutfits>(this.dataOutfitEndpoint);
  }

  // TODO поменять
  getDataTable(find: string, page: number, limit: number, sortdata: string, secectedGroup: string): Observable<any> {
    page += 1;

    let url = `${this.outfitEndpoint}?`;

    if (secectedGroup != undefined && secectedGroup != '0') {
      url += `group_id=${secectedGroup}&`
    }
    // Поиск id по пользователя
    if ((/[0-9]/.test(find)) && find.includes("id")) {
      url += `user_id=${find.split("id")[1]}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по названию
    else if (find != '') {
      url += `name=*${find}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Поиск по id
    else if (/[0-9]/.test(find)) {
      url += `id=${find}&page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }
    // Без поиска
    else {
      url += `page=${page}&limit=${limit}&sortBy=${sortdata}`;
    }

    return this.http.get<any[]>(url);
  }

  getOutfits(): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(this.outfitEndpoint);
  }

  getOutfitsForTape(): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(`${this.outfitEndpoint}?status=public`);
  }

  getOutfitsForTapeWithFilters(filters: string): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(`${this.outfitEndpoint}?status=public${filters}`);
  }

  getUserPublishedOutfits(id: number): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(`${this.outfitEndpoint}?status=public&user_id=${id}`);
  }

  getMyOutfits(id: number): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(`${this.outfitEndpoint}?user_id=${id}`);
  }

  getLikedOutfits(likes: string): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(`${this.outfitEndpoint}?${likes}`);
  }

  getOutfit(id: number): Observable<Outfit> {
    return this.http.get<Outfit>(`${this.outfitEndpoint}/${id}`);
  }

  addOutfit(Outfit: Outfit): Observable<Outfit> {
    return this.http.post<Outfit>(`${this.outfitEndpoint}`, Outfit);
  }

  editOutfit(Outfit: Outfit): Observable<Outfit> {
    return this.http.patch<Outfit>(`${this.outfitEndpoint}/${Outfit.id}`, Outfit);
  }

  publishOutfit(Outfit: Outfit): Observable<Outfit> {
    return this.http.patch<Outfit>(`${this.outfitEndpoint}/${Outfit.id}`, Outfit);
  }

  deleteOutfit(id: number): Observable<Outfit> {
    return this.http.delete<Outfit>(`${this.outfitEndpoint}/${id}`);
  }
}
