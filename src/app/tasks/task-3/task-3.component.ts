import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task3Service } from './task-3.service';
import { subLog } from '@utils';

@Component({
  selector: 'app-task-3',
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.scss',
  providers: [Task3Service]
})
export class Task3Component implements OnDestroy {
  subscription?: Subscription

  constructor(private myservice: Task3Service) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  newSubscribe() {
    this.subscription?.unsubscribe();
    this.subscription = this.myservice.getData().subscribe(subLog);
  }
}
