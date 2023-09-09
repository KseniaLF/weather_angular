import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MessageService } from 'src/app/services/message.service';
import { User, UserService } from 'src/app/services/user.service';
import { MapService } from 'src/app/services/map.service';

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

  isLoading: boolean = true;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    public mapService: MapService
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
      this.isLoading = false;

      this.user = user;
      this.mapService.initializeMap(user);

      return;
    });
  }
}
