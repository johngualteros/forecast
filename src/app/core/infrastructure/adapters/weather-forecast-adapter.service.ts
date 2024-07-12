import { Injectable } from '@angular/core';
import { WeatherForecastPort } from '../../domain/ports/weatherForecast.port';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../responses/weather-forecast-response';
import { WEATHER_API_URL, WEATHER_API_URL_SUFFIX } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastAdapterService implements WeatherForecastPort {

  constructor(
    private http: HttpClient
  ) { }

  getForecastInfo(acronym: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${WEATHER_API_URL}${acronym}${WEATHER_API_URL_SUFFIX}`);
  }
}
