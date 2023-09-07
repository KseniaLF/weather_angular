import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

interface User {
  id: number;
  name: string;
}
export const USERS: User[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<User[]> {
    const users = of(USERS);
    this.messageService.add('HeroService: fetched heroes');
    return users;
  }
}
