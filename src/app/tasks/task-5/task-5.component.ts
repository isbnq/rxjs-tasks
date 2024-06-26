import { Component } from '@angular/core';
import { Task5Service } from './task-5.service';

@Component({
  selector: 'app-task-5',
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.scss',
  providers: [Task5Service]
})
export class Task5Component {
  chatsCount: number = 0

  addChat() {
    this.chatsCount += 1;
  }

  delChat() {
    if (this.chatsCount) {
      this.chatsCount -= 1;
    }
  }

  getChatsCount() {
    return new Array(this.chatsCount);
  }
} 
