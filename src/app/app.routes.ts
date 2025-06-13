import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'cat-list',
    loadComponent: () =>
      import('./components/features/cat/table/table.component').then(
        (m) => m.TableComponent
      ),
    canActivate: [authGuard],
  },
];
