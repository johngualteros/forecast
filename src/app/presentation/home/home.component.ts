import { Component } from '@angular/core';
import { ForecastUtils } from '../../core/domain/utils/forecast-utils';
import { WeatherOption } from '../../core/domain/models/weather-forecast.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public weatherForecastOptions: WeatherOption[] = ForecastUtils.getPossibleWeatherForecast();

  public get greet(): string {
    return ForecastUtils.greetClient();
  }
}


