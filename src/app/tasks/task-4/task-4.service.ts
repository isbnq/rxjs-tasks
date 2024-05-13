import { Injectable } from '@angular/core';
import { of, debounceTime, delay, fromEvent, share, takeUntil, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class Task4Service {
  userInactive$ = merge(of(null), fromEvent(document, 'mousemove')).pipe(
    debounceTime(2000),
    share()
  );

  getDataWhenUserActive() {
    return ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
      takeUntil(this.userInactive$)
    );
  }

  getDelayedDataWhenUserActive() {
    return ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
      delay(3000),
      takeUntil(this.userInactive$)
    )
  }
}
