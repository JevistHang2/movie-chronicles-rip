import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig) { }

  getDetail(paramsValue: HttpParams, id: number) {
    let params = paramsValue;
    params = params.append('api_key', String(this.config.apiKey))
    return this.http.get(this.config.apiUrl + '/movie/' + id, { params })
  }

}
