import { inject, Injectable} from '@angular/core';
import { combineLatest, map, Observable, of, switchMap} from 'rxjs';
import {CoreModule} from '../../core.module';
import {BaseEntity, Me} from '../../models';
import {AuthApiService} from './auth-api.service';
import {isAfter} from "date-fns";


@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  private authApi: AuthApiService = inject(AuthApiService);

  me$: Observable<Me> = this.authApi.getMe();

  isActiveUserAdmin(): Observable<boolean> {
    return this.me$.pipe(map(me => me?.is_admin ?? false));
  }

  canActiveEdit$<T extends BaseEntity>(query: {
    object: Observable<T>;
  }): Observable<boolean> {
    return combineLatest([this.me$,query.object]).pipe(
      map(([me,object]) => {
        if(me === null){
          return false;
        }
        if (object.user_id && object.user_id === me.id) {
          return true;
        }
        return me.is_admin;
      }),
    );
  }

  loginUser(credentials: { email: string; password: string }): Observable<boolean> {
    return this.authApi.login(credentials).pipe(switchMap(result =>{
      if(result){
        localStorage.setItem("token", result.token);
        localStorage.setItem("exp_in", result.expire_in.toString());
        return of(true);
      }
      return of(false);
    }));
  }

  logOutUser() {
    localStorage.clear();
    window.location.reload();
  }

  refreshToken(): Observable<boolean> {
    return this.authApi.refreshToken().pipe(switchMap(result => {
      if(result){
        localStorage.setItem("token", result.token);
        localStorage.setItem("exp_in", result.expire_in.toString());
        return of(true)
      }
      return of(false);
    }));
  }

  verifyToken():boolean{
    const token = localStorage.getItem("token");

    if(token !== null){
      return !this.isTokenExpired();
    }
    return false;
  }

  isTokenExpired(): boolean{
    const expIn = localStorage.getItem("exp_in");
    if(expIn !== null){
      const expInDate = new Date(+expIn * 1000);
      return isAfter(new Date(), expInDate);
    }
    return true;
  }

  getToken():string | null{
    return localStorage.getItem("token");
  }
}
