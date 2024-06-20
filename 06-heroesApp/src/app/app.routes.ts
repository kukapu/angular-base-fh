import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/pages/routes/auth.routes').then(m => m.authChilds),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/routes/hero.routes').then(m => m.heroesChilds),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];



