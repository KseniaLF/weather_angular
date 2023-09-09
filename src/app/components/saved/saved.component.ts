import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent {
  users: User[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    const data: string | null = this.localStorageService.getData();

    this.users = data ? JSON.parse(data) : null;
  }

  onClear(): void {
    this.localStorageService.removeData();
    this.users = [];
  }
}
