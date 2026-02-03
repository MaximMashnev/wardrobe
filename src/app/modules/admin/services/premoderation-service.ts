import { ConfigService } from './../../../core/services/config-service';
import { Outfit } from './../../../shared/models/outfit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PremoderationService {
  private readonly outfitsEndpoint: string;

  constructor(
    private http: HttpClient,
    ConfigService: ConfigService
  ) {
    this.outfitsEndpoint = ConfigService.getEndpointUrl("outfits");
  }

  editStatusOutfit(outfit: Outfit): Observable<Outfit> {
    return this.http.patch<Outfit>(`${this.outfitsEndpoint}/${outfit.id}`, Outfit);
  }

  getModeratedOutfits(): Observable<Outfit> {
    return this.http.get<Outfit>(this.outfitsEndpoint);
  }
}
