import { ElementRef, Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Task2Service } from './task-2.service';
import { Subscription, combineLatest, fromEvent, map } from 'rxjs';
import { subLog } from '@utils';

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.scss',
  providers: [Task2Service]
})
export class Task2Component implements AfterViewInit, OnDestroy {
  @ViewChild('clickable') clickable!: ElementRef;

  subscription?: Subscription

  constructor(private myservice: Task2Service) {}

  ngAfterViewInit(): void {
    this.subscription = combineLatest([
      this.myservice.getServerData(),
      fromEvent(this.clickable.nativeElement, 'click')
    ]).pipe(
      map(([data, event]: [string, any]) => [data, {x: event.clientX, y: event.clientY}])
    ).subscribe(subLog);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
