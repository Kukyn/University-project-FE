import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";

export const AuthGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const isUserLogged: boolean = authService.verifyToken();

  if (!isUserLogged) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
