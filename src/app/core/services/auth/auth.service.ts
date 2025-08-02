import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  login(username: string, password: string): boolean {
    // Backend olmadan simüle ediyorum. Kullanıcı adı "umut", şifre "123456" ise giriş başarılı.
    if(username === 'umut' && password === '123456'){
      const mockToken = 'mock_jwt_token' // Normalde backend tarafından alınır.
      localStorage.setItem(this.tokenKey, mockToken);
      return true;
    }
    return false;
  }

  logout(): void {
    // Kullanıcı çıkış yaptıktan sonra token silinir.
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    // Token değerini localStorage içinden al.
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    // Token varsa, kullanıcı giriş yapmış anlamına gelir ve true döner.
    return !!this.getToken();
  }
  
}
