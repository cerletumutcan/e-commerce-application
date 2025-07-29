import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'login', loadChildren: () => import('./features/auth/auth.routes').then(m => m.routes)},
    {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];
