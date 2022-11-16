import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key:any='6fb3ec87faf947bca29123653221611';
  constructor(private _httpClient:HttpClient) { }
  getWeatherAPI(cityName:string = 'cairo'):Observable<any>{
    return this._httpClient.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${cityName}`);
  }
}
