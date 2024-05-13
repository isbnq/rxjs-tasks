import { Component, OnDestroy } from '@angular/core';
import { Task1Service } from './task-1.service';
import { subLog } from '@utils';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
  providers: [Task1Service]
})
export class Task1Component implements OnDestroy {
  goodSubscription?: Subscription
  badSubscription?: Subscription

  constructor(private myservice: Task1Service) {}

  ngOnDestroy(): void {
    this.goodSubscription?.unsubscribe();
    this.badSubscription?.unsubscribe();
  }

  goodRequest() {
    this.goodSubscription = this.myservice.getGood().subscribe(
      subLog.onErrOrComplete(() => this.goodSubscription = undefined))
  }
  badRequest() {
    this.badSubscription = this.myservice.getBad().subscribe(
      subLog.onErrOrComplete(() => this.badSubscription = undefined))
  }
}
