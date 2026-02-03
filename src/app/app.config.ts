import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from "./core/interceptors/interceptor";
import { ConfigService } from "./core/services/config-service";

export const appConfig: ApplicationConfig = {
  providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(),
        provideEventPlugins(),
        provideAnimations(),
        provideHttpClient(withInterceptors([authTokenInterceptor])),
        provideAppInitializer(() => inject(ConfigService).loadConfig())
    ]
};
