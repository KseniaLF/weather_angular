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
  weatherIcon: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.weatherService.getWeather(this.location).subscribe((weather) => {
      console.log(weather);

      this.weather = weather;

      this.weatherIcon = this.getIcon();
      return;
    });
  }

  getIcon(): string {
    const weathercode = this.weather?.current_weather?.weathercode;

    if (weathercode == 0) return 'clear_day';
    if (weathercode < 40) return 'partly_cloudy_day';
    if (weathercode < 70) return 'rainy';
    return 'cloudy_snowing';
  }
}
