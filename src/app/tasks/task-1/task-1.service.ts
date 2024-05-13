import { Injectable } from '@angular/core';
import { catchError, retry, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Injectable({
  providedIn: 'root'
})
export class Task1Service {
  constructor() { }

  get(url: string) {
    return ajax.get(url).pipe(
      catchError(err => {
        console.error(`Request error: ${err}`);
        return throwError(() => err);
      }),
      retry({
        count: 3,
        delay: (_err, retryCount) => {
          console.log(`Retry ${retryCount}`);
          return timer(500);
        }
      })
    )
  }

  getGood() {
    return this.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  getBad() {
    return this.get('https://jsonplaceholder.typicode.com/posts/0');
  }
}
