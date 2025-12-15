import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component')
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component')
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills-component')
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
