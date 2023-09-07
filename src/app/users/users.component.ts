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
    gender: 'male',
    name: 'dd',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    location: {
      street: {
        number: 7792,
        name: 'Torvbakkgata',
      },
      city: 'Åkrene',
      state: 'Oppland',
      country: 'Norway',
      postcode: '8655',
      coordinates: {
        latitude: '41.6274',
        longitude: '176.3368',
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi',
      },
    },
    email: 'frffgdg',
  };

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  // ngOnInit(): void {
  //   this.getUsers();
  // }

  // getUsers(): void {
  //   this.userService.getHeroes().subscribe((user) => {
  //     console.log(user);

  //     return (this.user = user);
  //   });
  // }
}
