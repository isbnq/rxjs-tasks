import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {
  constructor() { }

  getServerData() {
    return interval(1000).pipe(map((_v, i) => `Server data chunk ${i}`));
  }
}
