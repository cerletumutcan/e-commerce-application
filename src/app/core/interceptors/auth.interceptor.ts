import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService); // AuthService servisini enjekte ettim.
  const token = authService.getToken(); // Token'ı aldım.

  if(token){
    // Token mevcutsa atılan isteğe Authorization başlığı ekliyorum.
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq); // Güncellenmiş isteği devam ettiriyorum.
  }
  return next(req);
};
