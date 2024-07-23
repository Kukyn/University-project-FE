import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpCode } from '../../enums/http-code';
import { environment } from '../../../../environments/environment';

export type RequestOptions = {
  id?: number;
  withRelations?: string[];
  subResource?: string;
};

@Injectable()
export abstract class BasicApi {
  private readonly httpClient: HttpClient = inject(HttpClient);
  abstract endpoint: string;
  private baseUrl: string = environment.apiBaseUrl;

  get(options?: RequestOptions): Observable<any> {
    return this.httpClient.get(this.buildUrl(options),{observe: 'response', withCredentials: true,});
  }

  post(data: any, options?: RequestOptions): Observable<any> {
    return this.httpClient.post(this.buildUrl({ subResource: options?.subResource }), data, {observe: 'response', withCredentials: true,});
  }

  patch(data: any, options?: RequestOptions): Observable<any> {
    return this.httpClient.patch(this.buildUrl({id: options?.id}), data,{observe: 'response', withCredentials: true,});
  }

  delete(options: Pick<RequestOptions, 'id'>): Observable<boolean> {
    return this.httpClient
      .delete(this.buildUrl(options), { observe: 'response' })
      .pipe(map(response => response.status === HttpCode.OK));
  }

  private buildUrl(options?: RequestOptions): string {
    let url = this.baseUrl + this.endpoint;
    if (options?.id) {
      url += `/${options.id}`;
    }
    if (options?.subResource) {
      url += `/${options.subResource}`;
    }
    if(options?.withRelations) {
      url += `?withRelations=${options.withRelations.join(',')}`
    }
    return url;
  }
}
