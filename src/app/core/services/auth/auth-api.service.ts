import { Injectable, Type } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { SimpleApi } from '../data-access/simple-api';
import { Me } from '../../models';

interface LoginResponse{
  entity: Me,
  token: string,
  expire_in: number;
}

@Injectable({
  providedIn: CoreModule,
})
export class AuthApiService extends SimpleApi<Me> {
  endpoint: string = 'auth';
  model: Type<Me> = Me;

  getMe(): Observable<Me> {
    return this.get( { subResource: 'me' }).pipe(
      map(me => new this.model(me.body))
    );
  }

  refreshToken(): Observable<Omit<LoginResponse, 'entity'> | false> {
    return this.get({ subResource: 'refresh' }).pipe(
      map(response => {
        if(response.status === 200){
          return response.body
        }
        return false
      }),
    );
  }

  login(credentials: { email: string; password: string }): Observable<LoginResponse | false> {
    return this.post(credentials, {subResource: 'login'}).pipe(
      map(response => {
        if(response.status === 200){
          return response.body
        }
        return false
      }),
    );
  }
}
