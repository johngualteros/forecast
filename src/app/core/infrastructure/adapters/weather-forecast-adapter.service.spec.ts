import { TestBed } from '@angular/core/testing';

import { WeatherForecastAdapterService } from './weather-forecast-adapter.service';

describe('WeatherForecastAdapterService', () => {
  let service: WeatherForecastAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
