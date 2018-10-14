import { Component, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  
   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let options = { observe: 'response' };
    let result =
     http.get(baseUrl + 'api/SampleData/WeatherForecasts', { responseType: "text" })
      .pipe(retry(3, ))
         .toPromise();
     

  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
