import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForecast(identifier: string): Observable<any> {
    const endpoint = `https://api.weather.gov/gridpoints/${identifier}/31,80/forecast`;
    return this.http.get(endpoint);
  }
}
