import { TestBed, inject } from '@angular/core/testing';

import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherForecastService]
    });
  });

  it('should be created', inject([WeatherForecastService], (service: WeatherForecastService) => {
    expect(service).toBeTruthy();
  }));
});
