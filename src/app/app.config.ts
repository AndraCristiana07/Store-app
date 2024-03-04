import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MockDataService } from './mock-data.service';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    MockDataService,
    HttpClientModule,
  ],
};
