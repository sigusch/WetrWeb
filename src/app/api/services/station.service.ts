/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Station } from '../models/station';
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
  StationInsertResponse(s: Station): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
  StationInsert(s: Station): __Observable<null> {
    return this.StationInsertResponse(s).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param s undefined
   */
  StationUpdateResponse(s: Station): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
  StationUpdate(s: Station): __Observable<null> {
    return this.StationUpdateResponse(s).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param s undefined
   */
  StationDeleteResponse(s: Station): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
  StationDelete(s: Station): __Observable<null> {
    return this.StationDeleteResponse(s).pipe(
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
   * @param stationName undefined
   */
  StationGetLikeStationNameResponse(stationName: string): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stations/stationName=${stationName}`,
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
   * @param stationName undefined
   */
  StationGetLikeStationName(stationName: string): __Observable<Array<Station>> {
    return this.StationGetLikeStationNameResponse(stationName).pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }
}

module StationService {
}

export { StationService }
