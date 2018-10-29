import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SmartDateComponent } from './smart-date/smart-date.component';
//import { ExtraFeaturesModule } from './extra-features/extra-features.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastPrefetchService } from './services/weather-forecast-prefetch.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SmartDateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    //ExtraFeaturesModule,
    RouterModule.forRoot([
      { path: '', redirectTo: "home", pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'counter', component: CounterComponent },
      {
        path: 'fetch-data', component: FetchDataComponent,
        resolve: {
          weatherForecast: WeatherForecastPrefetchService
        }
      },
      {
        path: 'test',
        loadChildren: './extra-features/extra-features.module#ExtraFeaturesModule'
      },
      { path: '**', redirectTo: "home"}
    ]/*, { enableTracing: true }*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
