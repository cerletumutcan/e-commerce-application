import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/components/layout/layout.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { 
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent},
        ]
    },
    // { path: '**', redirectTo: '/notfound' }
];
