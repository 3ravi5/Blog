import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

export const appRoutes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
