import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService); // AuthService servisini enjekte ettim.
  const router = inject(Router); // Router'ı enjekte ettim. 

  if (authService.isAuthenticated()){
    return true; // Giriş yapılmışsa rotaya izin veriyorum.
  }

  // Giriş yapılmamışsa login sayfasına yönlendiriyorum. 
  router.navigate(['/login']);
  return false;
};
