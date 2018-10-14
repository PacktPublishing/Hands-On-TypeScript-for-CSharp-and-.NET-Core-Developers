import { Injectable } from '@angular/core';
import { WeatherForecastService, WeatherForecast }
  from './weather-forecast.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastPrefetchService
  implements Resolve<WeatherForecast[]> {
  constructor(private ws: WeatherForecastService) { }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Promise<WeatherForecast[]> {
    return await this.ws.getAll();
  }
}
