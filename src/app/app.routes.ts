import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/core/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'cats',
    loadComponent: () =>
      import('./components/features/cat/list/list.component').then(
        (m) => m.ListComponent
      ),
  },
];
