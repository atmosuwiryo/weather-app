import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for getting weather data
 */
export class WeatherService {
  constructor(private http: HttpClient) {}

  /**
   * Get weather forecast data
   * @param identifier grid point identifier
   * @returns Observable
   */
  getWeatherForecast(identifier: string): Observable<any> {
    const endpoint = `https://api.weather.gov/gridpoints/${identifier}/31,80/forecast`;
    return this.http.get(endpoint);
  }
}
