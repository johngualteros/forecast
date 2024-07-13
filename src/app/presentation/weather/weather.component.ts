import { Component, inject, OnInit } from '@angular/core';
import { WeatherForecastPort } from '../../core/domain/ports/weatherForecast.port';
import { WeatherForecastAdapterService } from '../../core/infrastructure/adapters/weather-forecast-adapter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WeatherResponse } from '../../core/infrastructure/responses/weather-forecast-response';
import { ForecastUtils } from '../../core/domain/utils/forecast-utils';
import { ChartComponent } from "./components/chart/chart.component";
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ChartComponent, RouterModule, SkeletonComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  private weatherForecastService: WeatherForecastPort = inject(WeatherForecastAdapterService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  public weatherForecastInfo: WeatherResponse;
  public acronym: string = this.activeRoute.snapshot.params['acronym'];
  
  ngOnInit() {
    this.weatherForecastService.getForecastInfo(this.acronym).subscribe((response: WeatherResponse) => {
      this.weatherForecastInfo = response;
    });
  }

  public get name(): string {
    const forecast = ForecastUtils.getPossibleWeatherForecast().find((option) => option.acronym === this.acronym);
    return forecast ? forecast.name : '';
  }
}
