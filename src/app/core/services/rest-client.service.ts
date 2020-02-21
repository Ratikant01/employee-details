import {Injectable, isDevMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  apiRoot: string; // service base url

  constructor(private readonly http: HttpClient) {
    this.apiRoot = environment.baseUrl;
  }

  isDevMode() {
    return isDevMode();
  }

  /**
   * GET
   * @param url: request URL
   * @param options: options
   */
  get(url: string, options?: any): Observable<any> {
    return this.http.get(this.apiRoot + url, options);
  }

  /**
   * POST
   * @param url: request URL
   * @param body: request body
   * @param options: options
   */
  post(url: string, body: any, options?: any): Observable<any> {
    if (this.isDevMode()) {
      return this.http.get(this.apiRoot + url, options);
    } else {
      return this.http.post(this.apiRoot + url, body, options);
    }
  }

  /**
   * PUT
   * @param url: request URL
   * @param body: request body
   * @param options: options
   */
  put(url: string, body: any, options?: any): Observable<any> {
    if (this.isDevMode()) {
      return this.http.get(this.apiRoot + url, options);
    } else {
      return this.http.put(this.apiRoot + url, body, options);
    }
  }

  /**
   * DELETE
   * @param url: request URL
   * @param options: options
   */
  delete(url: string, options?: any): Observable<any> {
    if (this.isDevMode()) {
      return this.http.get(this.apiRoot + url, options);
    } else {
      return this.http.delete(this.apiRoot + url, options);
    }
  }
}
