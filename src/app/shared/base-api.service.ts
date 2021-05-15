import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { AuthHelperService } from './auth-helper.service';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseApiService {
  constructor(
    private http: HttpClient,
    private authService: AuthHelperService,
    @Inject(String) public host: string = environment.baseApiUrl
  ) { }

  protected get<TData>(
    url: string,
    params?: any,
    isProtected: boolean = false,
    isBlob = false
  ): Observable<TData> {
    return this.request<TData>(
      'GET',
      url,
      null,
      params,
      isProtected,
      isBlob
    ).pipe(
      map((response) => (isBlob === true ? response.body : response.body))
    );
  }

  protected post<TData>(
    url: string,
    data: any,
    isProtected: boolean = false,
    isBlob = false
  ): Observable<TData> {
    return this.request<TData>(
      'POST',
      url,
      data,
      null,
      isProtected,
      isBlob
    ).pipe(map((response) => response.body));
  }

  protected put<TData>(
    url: string,
    data: any,
    isProtected: boolean = false,
    isBlob = false
  ): Observable<TData> {
    return this.request<TData>(
      'PUT',
      url,
      data,
      null,
      isProtected,
      isBlob
    ).pipe(map((response) => response.body));
  }

  protected delete<TData>(
    url: string,
    isProtected: boolean = false
  ): Observable<TData> {
    return this.request<TData>('DELETE', url, null, null, isProtected).pipe(
      map((response) => response.body)
    );
  }

  private request<TData>(
    method: string,
    url: string,
    data?: TData,
    params?: any,
    isProtected: boolean = false,
    isBlob: boolean = false
  ): Observable<HttpResponse<TData>> {
    if (isProtected) {
      const token = this.authService.getAccessToken();
      if (isBlob) {
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: token,
          }),
          body: {},
          responseType: 'blob' as 'json',
          observe: 'response' as 'body',
          params: {},
        };
        httpOptions.body = data;
        httpOptions.params = params;
        return this.http.request<HttpResponse<TData>>(
          method,
          `${this.host}/${url}`,
          httpOptions
        );
      } else {
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: token,
          }),
          body: {},
          observe: 'response' as 'body',
          params: {},
        };
        httpOptions.body = data;
        httpOptions.params = params;
        return this.http.request<HttpResponse<TData>>(
          method,
          `${this.host}/${url}`,
          httpOptions
        );
      }
    } else {
      if (isBlob) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          body: {},
          responseType: 'blob' as 'json',
          observe: 'response' as 'body',
          params: {},
        };
        httpOptions.body = data;
        httpOptions.params = params;
        return this.http.request<HttpResponse<TData>>(
          method,
          `${this.host}/${url}`,
          httpOptions
        );
      } else {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          body: {},
          observe: 'response' as 'body',
          params: {},
        };
        httpOptions.body = data;
        httpOptions.params = params;
        return this.http.request<HttpResponse<TData>>(
          method,
          `${this.host}/${url}`,
          httpOptions
        );
      }
    }
  }
}
