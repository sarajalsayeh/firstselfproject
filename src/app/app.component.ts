import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  temp: number;
  mintemp: number;
  maxtemp: number;
  pressure: number;
  humidity: number;
  constructor(private apiService: ApiService) {}
  ngOnInit() {}
  myClickFunction() {
    console.log(this.name);
    this.apiService.getweather(this.name).subscribe(res => {
      console.log(res);
      this.temp = res.main.temp;
      this.mintemp = res.main.temp_min;
      this.maxtemp = res.main.temp_max;
      this.pressure = res.main.pressure;
      this.humidity = res.main.humidity;
    });
  }
}
