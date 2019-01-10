/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SearchResult } from '../models/search-result';
import { Station } from '../models/station';
@Injectable({
  providedIn: 'root',
})
class SearchService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param searchValue undefined
   */
  SearchGetBySearchValueResponse(searchValue: string): __Observable<__StrictHttpResponse<Array<SearchResult>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/search/${searchValue}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchResult>>;
      })
    );
  }
  /**
   * @param searchValue undefined
   */
  SearchGetBySearchValue(searchValue: string): __Observable<Array<SearchResult>> {
    return this.SearchGetBySearchValueResponse(searchValue).pipe(
      __map(_r => _r.body as Array<SearchResult>)
    );
  }

  /**
   * @param searchResults undefined
   */
  SearchGetBySearchResultsResponse(searchResults: Array<SearchResult>): __Observable<__StrictHttpResponse<Array<Station>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = searchResults;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/search`,
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
   * @param searchResults undefined
   */
  SearchGetBySearchResults(searchResults: Array<SearchResult>): __Observable<Array<Station>> {
    return this.SearchGetBySearchResultsResponse(searchResults).pipe(
      __map(_r => _r.body as Array<Station>)
    );
  }
}

module SearchService {
}

export { SearchService }
