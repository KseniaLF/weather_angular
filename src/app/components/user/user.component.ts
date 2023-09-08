import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MessageService } from 'src/app/services/message.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User = {
    gender: '',
    name: '',
    picture: {
      large: '',
    },
    location: '',
    email: '',
  };
  // user: User = {
  //   gender: 'male',
  //   name: 'dd',
  //   picture: {
  //     large: 'https://randomuser.me/api/portraits/men/9.jpg',
  //   },
  //   location: {
  //     street: {
  //       number: 7792,
  //       name: 'Torvbakkgata',
  //     },
  //     city: 'Åkrene',
  //     state: 'Oppland',
  //     country: 'Norway',
  //     postcode: '8655',
  //     coordinates: {
  //       latitude: '41.6274',
  //       longitude: '176.3368',
  //     },
  //     timezone: {
  //       offset: '+5:30',
  //       description: 'Bombay, Calcutta, Madras, New Delhi',
  //     },
  //   },
  //   email: 'frffgdg',
  // };

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSave(): void {
    const prevData = this.localStorageService.getData();

    const updatedData = prevData
      ? [this.user, ...JSON.parse(prevData)]
      : [this.user];

    this.localStorageService.saveData(JSON.stringify(updatedData));

    this.messageService.add('User successfully saved!');
  }

  getUsers(): void {
    this.userService.getUser().subscribe((user) => {
      return (this.user = user);
    });
  }
}
