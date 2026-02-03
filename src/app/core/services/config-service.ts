import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Config {
  api: {
    baseUrl: string,
    endpoints: { [key: string] : string }
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private config!: Config;

  constructor(
    private http: HttpClient
  ) {
  }

  protected async loadConfig(): Promise<void> {
    this.config = await firstValueFrom(this.http.get<Config>("/assets/config.json"));
  }

  getEndpointUrl(endpointKey: string): string {
    const baseUrl = this.config.api.baseUrl;
    const endpoint = this.config.api.endpoints[endpointKey];
    return baseUrl + endpoint;
  }
}
