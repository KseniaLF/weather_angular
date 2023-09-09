import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  public chart: any;

  createChart(weather: any): void {
    const dateTimeArray = weather?.hourly?.time.slice(0, 23) || [];
    const timeArray = dateTimeArray.map((dateTime: string) => {
      const parts = dateTime.split('T');
      return parts[1] || '';
    });

    const ctx = document.getElementById(
      'temperatureChart'
    ) as HTMLCanvasElement;

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: timeArray,
          datasets: [
            {
              label: 'Температура (°C)',
              data: weather?.hourly?.temperature_2m.slice(0, 23),
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.1)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }
}
