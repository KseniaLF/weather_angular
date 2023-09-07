import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=-19.7962&lo777ngitude=178.2180&current_weather=true&hourly=temperature_2m';

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

  getWeather(): Observable<any> {
    return this.http.get<any>(this.heroesUrl).pipe(
      tap(() => this.log('fetched weather.')),
      catchError(this.handleError<any>('getWeather', []))
    );
  }
}
