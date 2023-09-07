import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/user.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() location?: any;

  weather?: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.weatherService.getWeather(this.location).subscribe((weather) => {
      console.log(weather);

      return (this.weather = weather);
    });
  }
}
