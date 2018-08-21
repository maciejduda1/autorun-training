import { Location } from './get-weather.service';
// import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  latitude: number;
  longtitude: number;
}

@Injectable()
export class GetWeatherService {

  constructor (private http: HttpClient) {}

  getWeather(location: Location) {
    const url = 'https://www.metaweather.com//api/location/search/?lattlong=' + location.latitude + ',' + location.longtitude;
    return this.http.get(url);
  }
}
