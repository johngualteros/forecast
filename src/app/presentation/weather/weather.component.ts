import { Component, inject, OnInit } from '@angular/core';
import { WeatherForecastPort } from '../../core/domain/ports/weatherForecast.port';
import { WeatherForecastAdapterService } from '../../core/infrastructure/adapters/weather-forecast-adapter.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherResponse } from '../../core/infrastructure/responses/weather-forecast-response';
import { ForecastUtils } from '../../core/domain/utils/forecast-utils';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  private weatherForecastService: WeatherForecastPort = inject(WeatherForecastAdapterService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  public weatherForecastInfo: WeatherResponse;
  public acronym: string = this.activeRoute.snapshot.params['acronym'];
  
  ngOnInit() {
    // this.weatherForecastService.getForecastInfo(this.acronym).subscribe((response: WeatherResponse) => {
    //   this.weatherForecastInfo = response;
    //   console.log(this.weatherForecastInfo);
    // });


  }

  public get name(): string {
    const forecast = ForecastUtils.getPossibleWeatherForecast().find((option) => option.acronym === this.acronym);
    return forecast ? forecast.name : '';
  }
}
