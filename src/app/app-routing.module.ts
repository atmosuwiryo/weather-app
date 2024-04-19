import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'weather/:identifier', component: WeatherForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
