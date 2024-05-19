import { Injectable } from '@angular/core';
import { debounceTime, delay, fromEvent, share, takeUntil, startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class Task4Service {
  userInactive$ = fromEvent(document, 'mousemove').pipe(
      startWith(null),  // Начальное значение, чтобы сработал debounce, если мышка не двигалась
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
