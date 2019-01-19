/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Station } from '../models/station';
import { Community } from '../models/community'
@Injectable({
  providedIn: 'root',
})
class StationService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  StationGetAllStationsResponse(): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Station>>;
      })
    );
  }  
  
  StationGetAllStations():  __Observable<Array<Station>> {
    return this.StationGetAllStationsResponse().pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }

  /**
   * @param s undefined
   */
  StationInsertResponse(s: Station, username: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (username != null) __params = __params.set('username', username.toString());
    __body = s;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stations`,
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
   * @param s undefined
   */
  StationInsert(s: Station, username: string): __Observable<null> {
    return this.StationInsertResponse(s, username).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param s undefined
   */
  StationUpdateResponse(s: Station, username: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (username != null) __params = __params.set('username', username.toString());
    __body = s;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/stations`,
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
   * @param s undefined
   */
  StationUpdate(s: Station, username: string): __Observable<null> {
    return this.StationUpdateResponse(s, username).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param s undefined
   */
  StationDeleteResponse(s: Station, username: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (username != null) __params = __params.set('username', username.toString());
    __body = s;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/stations`,
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
   * @param s undefined
   */
  StationDelete(s: Station, username: string): __Observable<null> {
    return this.StationDeleteResponse(s, username).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  StationGetByIdResponse(id: string): __Observable<__StrictHttpResponse<Station>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Station>;
      })
    );
  }
  /**
   * @param id undefined
   */
  StationGetById(id: string): __Observable<Station> {
    return this.StationGetByIdResponse(id).pipe(
      __map(_r => _r.body as Station)
    );
  }

  /**
   * @param community undefined
   */
  StationGetByCommunityResponse(community: string): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/community=${community}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Station>>;
      })
    );
  }
  /**
   * @param community undefined
   */
  StationGetByCommunity(community: string): __Observable<Array<Station>> {
    return this.StationGetByCommunityResponse(community).pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }

  /**
   * @param username undefined
   */
  StationGetLikeusernameResponse(username: string): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/username=${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Station>>;
      })
    );
  }
  /**
   * @param username undefined
   */
  StationGetLikeusername(username: string): __Observable<Array<Station>> {
    return this.StationGetLikeusernameResponse(username).pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }

  /**
   * @param username undefined
   */
  StationGetByUsernameResponse(username: string): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/userName=${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Station>>;
      })
    );
  }
  /**
   * @param username undefined
   */
  StationGetByUsernameName(username: string): __Observable<Array<Station>> {
    return this.StationGetByUsernameResponse(username).pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }

  StationGetCommunitiesResponse(): __Observable<__StrictHttpResponse<Array<Community>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/getCommunities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Community>>;
      })
    );
  }
  /**
   * @param username undefined
   */
  StationGetCommunities(): __Observable<Array<Community>> {
    return this.StationGetCommunitiesResponse().pipe(
      __map(_r => _r.body as Array<Community>)
    );
  }

}

module StationService {
}

export { StationService }
