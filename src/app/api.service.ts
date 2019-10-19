import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weatherinfo } from './weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  strvar: string = 'e8ddbf3912400db66926895c485116fc';
  getweather(weatherlocation: string) {
    return this.httpClient.get<Weatherinfo>(
      `http://api.openweathermap.org/data/2.5/weather?q=${weatherlocation}&APPID=${
        this.strvar
      }  `
    );
  }
}
