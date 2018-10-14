import { TestBed, inject } from '@angular/core/testing';

import { WeatherForecastPrefetchService } from './weather-forecast-prefetch.service';

describe('WeatherForecastPrefetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherForecastPrefetchService]
    });
  });

  it('should be created', inject([WeatherForecastPrefetchService], (service: WeatherForecastPrefetchService) => {
    expect(service).toBeTruthy();
  }));
});
