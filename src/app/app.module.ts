import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
