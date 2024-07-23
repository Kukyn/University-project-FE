import { Injectable, Type } from '@angular/core';
import { SimpleApi } from '../../../../core/services/public-api';
import { UserModule } from '../../user.module';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: UserModule,
})
export class UserApiService extends SimpleApi<User> {
  endpoint: string = 'user';
  model: Type<User> = User;
}
