import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient,
    @Inject('BASE_URL')
    private baseUrl: string) { }
  async getAll(): Promise<WeatherForecast[]> {
    return await this.http.get<WeatherForecast[]>
      (this.baseUrl + 'api/SampleData/WeatherForecasts').toPromise();
  }

  async newData(x: WeatherForecast): Promise<string> {
    try {
      let response = await this.http.post<WeatherForecast>(
        '/api/SampleData/', x, { observe: 'response' })
        .toPromise();
      if (response.status == 201)
        return response.headers.get("Location");
      else return null;
    }
    catch (error) {
      if (error instanceof ErrorEvent) {
        throw "error in client-server communication: " + error.message;
      }
      else if (error instanceof HttpErrorResponse) {
        throw "server returned the following error: " + error.message;
      }
      else throw "unknown error";
    }
  }
}
export interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF?: number;
  summary: string;
}
