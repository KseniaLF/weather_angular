import { Component } from '@angular/core';
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

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUser().subscribe((user) => {
      console.log(user);

      return (this.user = user);
    });
  }
}
