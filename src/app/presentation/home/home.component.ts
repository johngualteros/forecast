import { Component } from '@angular/core';
import { ForecastUtils } from '../../core/domain/utils/forecast-utils';
import { WeatherOption } from '../../core/domain/models/weather-forecast.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public weatherForecastOptions: WeatherOption[] = [
    {
      name: 'District of Columbia Forecast',
      acronym: 'LWX'
    },
    {
      name: 'Kansas Forecast',
      acronym: 'TOP'
    }
  ]

  public get greet(): string {
    return ForecastUtils.greetClient();
  }
}


