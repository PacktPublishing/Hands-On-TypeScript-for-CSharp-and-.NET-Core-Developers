import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger, transition, query, style,
  stagger, animate, group
} from '@angular/animations'

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  animations: [
    trigger('enterLeaveAnimation', [
      transition('* => *', [
        query(':enter', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }), { optional: true }),
        group([
          query(':enter', [
            stagger(200, [
              animate('1s ease-out', style({
                opacity: 1,
                transform: 'translateX(0)'
              })),
            ]),
          ], { optional: true }),
          query(':leave', [
            stagger(200, [
              animate('1s ease-out', style({
                opacity: 0,
                transform: 'translateX(-100%)'
              })),
            ])
          ], { optional: true })
        ]),
         
      ])
     ])
  ]
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
