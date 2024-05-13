import { Component, OnDestroy } from '@angular/core';
import { Task4Service } from './task-4.service';
import { Subscription } from 'rxjs';
import { subLog } from '@utils';

@Component({
  selector: 'app-task-4',
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.scss',
  providers: [Task4Service]
})
export class Task4Component implements OnDestroy {
  subscription?: Subscription
  longSubscription?: Subscription

  constructor(private myservice: Task4Service) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.longSubscription?.unsubscribe();
  }

  newRequest(): void {
    this.subscription?.unsubscribe();
    this.subscription = this.myservice.getDataWhenUserActive().subscribe(subLog);
  }

  newLongRequest(): void {
    this.longSubscription?.unsubscribe();
    this.longSubscription = this.myservice.getDelayedDataWhenUserActive().subscribe(subLog);
  }
}
