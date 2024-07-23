import {Injectable, Type} from '@angular/core';
import {map, Observable} from 'rxjs';
import {BasicApi, RequestOptions} from './basic-api';
import {HttpCode} from "../../enums/http-code";

@Injectable()
export abstract class SimpleApi<T> extends BasicApi {
  abstract model: Type<T>;

  getAll(options?: RequestOptions): Observable<T[]> {
    return this.get(options).pipe(map(dataArray => {
      return dataArray.body.map((data: T) => new this.model(data))
    })) as Observable<T[]>;
  }

  getSingle(options: RequestOptions): Observable<T> {
    return this.get(options).pipe(map(data => new this.model(data.body)))
  }

  create(data: Partial<T>): Observable<boolean> {
    return this.post(data).pipe(map(data => data.status === HttpCode.Created));
  }

  update(data: Partial<T>, id:number): Observable<boolean> {
    return this.patch(data, {id:id}).pipe(map(data => data.status === HttpCode.OK));
  }

  //TODO: implement delete
}
