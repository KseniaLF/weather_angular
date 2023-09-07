import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);

    setTimeout(() => {
      this.messages = this.messages.filter((msg) => msg !== message);
    }, 10000);
  }

  clear() {
    this.messages = [];
  }
}
