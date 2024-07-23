import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  const token = authService.getToken();
  if (req.url.includes('login') || req.url.includes('refresh')) {
    return next(req);
  }
  if (token) {
    if (authService.isTokenExpired()) {
      authService.refreshToken();
    }
    const requestWithToken = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(requestWithToken);
  }
  return throwError(() => new Error('Missing token'));
};
