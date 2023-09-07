import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user: User = {
    gender: '',
    name: '',
    picture: {
      large: '',
    },
    location: '',
    email: '',
  };

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getHeroes().subscribe((user) => {
      console.log(user);

      return (this.user = user);
    });
  }
}
