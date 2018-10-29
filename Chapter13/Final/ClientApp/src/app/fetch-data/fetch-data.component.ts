import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger, transition, query, style,
  stagger, animate, group
} from '@angular/animations'
import { WeatherForecastService, WeatherForecast }
  from '../services/weather-forecast.service'
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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
export class FetchDataComponent implements OnInit {
    
  public forecasts: WeatherForecast[];

  constructor(private ws: WeatherForecastService,
    private router: Router, private route: ActivatedRoute) {}
  goHome() {
    this.router.navigate(["/"]);
  }
  async sendLocalData() {
    try {
      let result = await this.ws.newData({
        dateFormatted: new DatePipe("en-US")
            .transform(new Date(), 'shortDate'),
        temperatureC: 20,
        temperatureF:0, //not processed because redundant
        summary:'Warm'
      });
      if (result) alert("local data recorded: " + result);
      else alert("local data succesfully recorded");
    }
    catch (errorMessage) {
      alert("Unsuccesfull operation. " + errorMessage);
    }
  }
  async ngOnInit(): Promise<void> {
    try {
      this.route.data
        .subscribe((data: { weatherForecast: WeatherForecast[] }) => {
          this.forecasts = data.weatherForecast;
      });
    }
    catch (ex) {
      console.error(ex);
    }
  }
}


