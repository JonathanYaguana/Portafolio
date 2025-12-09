import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portafolio',
    loadComponent: () => import('./components/header/header-component')
  },
  {
    path: '**',
    redirectTo: 'portafolio'
  }
];
