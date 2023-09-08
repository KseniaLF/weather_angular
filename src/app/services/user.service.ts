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

  private url = 'https://randomuser.me/api/j';

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messageService.add('Something went wrong, try again.', 'error');
      return of(result as T);
    };
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.url).pipe(
      map(({ results: [user] }: any) => user),
      catchError(this.handleError<User>())
    );
  }
}
