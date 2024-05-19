import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { AjaxResponse, ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class Task3Service {
  data$?: Observable<AjaxResponse<unknown>>

  getData() {
    if (this.data$) {
      return this.data$;
    } else {
      return this.data$ = ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
        shareReplay()  // Расшарить последний результат между всеми подписчиками (старыми и новыми)
      );
    }
  }
}
