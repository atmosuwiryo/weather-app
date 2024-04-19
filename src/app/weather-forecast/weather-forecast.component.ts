import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit, OnDestroy {
  forecastData: any;
  subscription = new Subscription();

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const identifier = params['identifier'];
      this.subscription.add(
        this.weatherService.getWeatherForecast(identifier).subscribe(data => {
          this.forecastData = data;
        }, error => {
          // Just print to console
          console.error(error);}
        ));
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription
    this.subscription.unsubscribe();
  }
}
