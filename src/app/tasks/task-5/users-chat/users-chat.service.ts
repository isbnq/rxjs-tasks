import { Injectable, OnDestroy } from '@angular/core';
import { Task5Service } from '../task-5.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersChatService implements OnDestroy {
  private userId: number

  constructor(private server: Task5Service) {
    this.userId = this.server.addUser();
  }

  getUserId() {
    return this.userId;
  }

  ngOnDestroy(): void {
    this.server.delUser(this.userId);
  }

  setActivity(activity$: Observable<unknown>): void {
    this.server.setUserActivity(this.userId, activity$);
  }

  getUsersActivity() {
    return this.server.getUsersActivity();
  }
}
