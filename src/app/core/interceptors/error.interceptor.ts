import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService: NzNotificationService = inject(NzNotificationService);

  if (req.url.includes('/auth/login')) {
    return next(req);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      notificationService.error('Error', error.message, {
        nzPlacement: 'bottomLeft',
        nzAnimate: true,
        nzDuration: 5000,
      });
      return throwError(() => new Error(error.message));
    }),
  );
};
