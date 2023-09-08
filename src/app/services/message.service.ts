import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  error?: string = '';

  //  by default - success message

  add(message: string, error?: string) {
    this.messages.push(message);

    setTimeout(() => {
      this.messages = this.messages.filter((msg) => msg !== message);
    }, 7000);

    this.error = error;
  }

  clear() {
    this.messages = [];
  }

  getColorClass() {
    return this.error ? 'red-text' : 'green-text';
  }
}
