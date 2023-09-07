import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  weather: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.weatherService.getWeather().subscribe((weather) => {
      console.log(weather);

      return (this.weather = weather);
    });
  }
}
