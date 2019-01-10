/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Measurement } from '../models/measurement';
@Injectable({
  providedIn: 'root',
})
class MeasurementService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `MeasurementService.MeasurementGetMeasurementForStationParams` containing the following parameters:
   *
   * - `to`:
   *
   * - `stationId`:
   *
   * - `from`:
   */
  MeasurementGetMeasurementForStationResponse(params: MeasurementService.MeasurementGetMeasurementForStationParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/measurements/${params.stationId}/from=${params.from}to=${params.to}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `MeasurementService.MeasurementGetMeasurementForStationParams` containing the following parameters:
   *
   * - `to`:
   *
   * - `stationId`:
   *
   * - `from`:
   */
  MeasurementGetMeasurementForStation(params: MeasurementService.MeasurementGetMeasurementForStationParams): __Observable<Blob> {
    return this.MeasurementGetMeasurementForStationResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param params The `MeasurementService.MeasurementGetAccumulationForStationParams` containing the following parameters:
   *
   * - `to`:
   *
   * - `stationId`:
   *
   * - `intervalType`:
   *
   * - `from`:
   *
   * - `accumulationType`:
   */
  MeasurementGetAccumulationForStationResponse(params: MeasurementService.MeasurementGetAccumulationForStationParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;





    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/measurements/${params.stationId}/from=${params.from}to=${params.to}accumType=${params.accumulationType}intType=${params.intervalType}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `MeasurementService.MeasurementGetAccumulationForStationParams` containing the following parameters:
   *
   * - `to`:
   *
   * - `stationId`:
   *
   * - `intervalType`:
   *
   * - `from`:
   *
   * - `accumulationType`:
   */
  MeasurementGetAccumulationForStation(params: MeasurementService.MeasurementGetAccumulationForStationParams): __Observable<Blob> {
    return this.MeasurementGetAccumulationForStationResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param m undefined
   */
  MeasurementInsertResponse(m: Measurement): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = m;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/measurements`,
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
   * @param m undefined
   */
  MeasurementInsert(m: Measurement): __Observable<null> {
    return this.MeasurementInsertResponse(m).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MeasurementService {

  /**
   * Parameters for MeasurementGetMeasurementForStation
   */
  export interface MeasurementGetMeasurementForStationParams {
    to: string;
    stationId: string;
    from: string;
  }

  /**
   * Parameters for MeasurementGetAccumulationForStation
   */
  export interface MeasurementGetAccumulationForStationParams {
    to: string;
    stationId: string;
    intervalType: 0 | 1 | 2 | 3 | 4;
    from: string;
    accumulationType: 0 | 1 | 2 | 3 | 4;
  }
}

export { MeasurementService }
