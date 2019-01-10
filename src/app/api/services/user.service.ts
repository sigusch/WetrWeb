/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserService.UserLoginParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   */
  UserLoginResponse(params: UserService.UserLoginParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.password != null) __params = __params.set('password', params.password.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UserService.UserLoginParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   */
  UserLogin(params: UserService.UserLoginParams): __Observable<null> {
    return this.UserLoginResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserService {

  /**
   * Parameters for UserLogin
   */
  export interface UserLoginParams {
    username: null | string;
    password: null | string;
  }
}

export { UserService }
