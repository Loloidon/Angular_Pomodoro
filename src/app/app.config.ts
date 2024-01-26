import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
