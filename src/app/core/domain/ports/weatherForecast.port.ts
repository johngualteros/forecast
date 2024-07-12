import { Observable } from "rxjs";
import { WeatherResponse } from "../../infrastructure/responses/weather-forecast-response";

export interface WeatherForecastPort {
    getForecastInfo(acronym: string): Observable<WeatherResponse>;
}