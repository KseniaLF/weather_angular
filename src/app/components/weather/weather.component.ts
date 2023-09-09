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
  intervalId: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();

    // Update current temperature periodically (every 5 minutes).
    this.intervalId = setInterval(() => {
      this.getWeather();
    }, 5 * 60 * 1000);
  }

  ngOnDestroy(): void {
    // Stopping the interval when a component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getWeather(): void {
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
