import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

export interface User {
  name: any;
  gender: string;
  picture: { large: string };
  location: any;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'https://randomuser.me/api';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<User> {
    return this.http.get<User>(this.heroesUrl).pipe(
      tap((res) => {
        this.log('fetched user');
      }),
      map(({ results }: any) => results[0]),
      catchError(this.handleError<any>('getHeroes', []))
    );
  }
}
