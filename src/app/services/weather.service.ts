import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'https://api.open-meteo.com/v1/forecast';

  private log(message: string, status?: string) {
    this.messageService.add(`WeatherService: ${message}`, status);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed.`, 'error');
      return of(result as T);
    };
  }

  getWeather(location: any): Observable<any> {
    const params = new HttpParams()
      .set('latitude', location?.coordinates?.latitude)
      .set('longitude', location?.coordinates?.longitude)
      .set('hourly', 'temperature_2m')
      .set('current_weather', true)
      .set('daily', 'temperature_2m_max,temperature_2m_min')
      .set('timezone', 'GMT');

    return this.http
      .get<any>(this.heroesUrl, { params })
      .pipe(catchError(this.handleError<any>('getWeather', [])));
  }
}
