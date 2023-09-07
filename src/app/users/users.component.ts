import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  selectedUser?: User;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.messageService.add(`HeroesComponent: Selected hero id=${user.id}`);
  }

  getUsers(): void {
    this.userService.getHeroes().subscribe((users) => (this.users = users));
  }
}
