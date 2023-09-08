import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  key: string = 'users';

  constructor() {}

  public saveData(value: string) {
    localStorage.setItem(this.key, value);
  }

  public getData() {
    return localStorage.getItem(this.key);
  }
  public removeData() {
    localStorage.removeItem(this.key);
  }

  public clearData() {
    localStorage.clear();
  }
}
