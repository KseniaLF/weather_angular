import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  private log(message: string) {
    this.messageService.add(`WeatherService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed.`);
      return of(result as T);
    };
  }

  getWeather(location: any): Observable<any> {
    console.log(location);
    const params = new HttpParams()
      .set('latitude', location?.coordinates?.latitude)
      .set('longitude', location?.coordinates?.longitude)
      .set('current_weather', true)
      .set('hourly', 'temperature_2m');

    return this.http.get<any>(this.heroesUrl, { params }).pipe(
      tap(() => this.log('fetched weather.')),
      catchError(this.handleError<any>('getWeather', []))
    );
  }
}
