import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./child-routes/child-routes.module').then(m => m.ChildModule)
  }
];
