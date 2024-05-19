import { Injectable } from '@angular/core';
import { of, debounceTime, delay, fromEvent, share, takeUntil, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class Task4Service {
  userInactive$ = merge(
      of(null),  // Костыль, чтобы сработал debounce, если мышка не двигалась
      fromEvent(document, 'mousemove')
    ).pipe(
    debounceTime(2000),
    share()  // Шарим между всеми подписчиками, чтобы не плодить лишних слушаталей события mousemove
  );

  getDataWhenUserActive() {
    return ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
      takeUntil(this.userInactive$)  // Отменяем, если пользователь неактивен (если получаем событие из userInactive$)
    );
  }

  getDelayedDataWhenUserActive() {
    return ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
      delay(3000),  // Имитируем долгий запрос
      takeUntil(this.userInactive$)
    )
  }
}
