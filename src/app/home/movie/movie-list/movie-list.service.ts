import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { ResponseMovie } from './model/response-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig) { }

  getListMovie(paramsValue: HttpParams) {
    let params = paramsValue;
    params = params.append('api_key', String(this.config.apiKey))
    return this.http.get(this.config.apiUrl + '/discover/movie/', { params })
  }

  getListGenre(paramsValue: HttpParams) {
    let params = paramsValue;
    params = params.append('api_key', String(this.config.apiKey))
    return this.http.get(this.config.apiUrl + '/genre/movie/list', { params })
  }

}
