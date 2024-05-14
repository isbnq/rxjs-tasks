import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, debounceTime, merge } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Task5Service {
  #users: Map<number, {
    activity$: BehaviorSubject<{
      id: number,
      active: boolean
    }>
  }> = new Map();
  #lastUserId: number = 0;
  #freeIds: number[] = [];

  #usersActivityList: Observable<{ id: number, active: boolean }>[] = []
  #usersActivity$ = new BehaviorSubject(this.#usersActivityList)

  constructor() { }

  addUser(): number {
    const newId = this.#freeIds.pop() ?? ++this.#lastUserId;
    
    const userActivity$ = new BehaviorSubject({
      id: newId,
      active: false
    })

    this.#users.set(newId, {
      activity$: userActivity$
    });

    this.#usersActivityList.push(userActivity$);
    this.#usersActivity$.next(this.#usersActivityList);

    return newId;
  }

  delUser(id: number) {
    this.#users.delete(id);
    this.#usersActivityList = [...this.#users.values()].map(v => v.activity$);
    this.#usersActivity$.next(this.#usersActivityList);
  }

  setUserActivity(id: number, newActivity$: Observable<unknown>) {
    const user = this.#users.get(id);

    if (user) {
      merge(
        newActivity$.pipe(
          map(() => ({ id, active: true }))
        ),
        newActivity$.pipe(
          debounceTime(5000),
          map(() => ({ id, active: false }))
        )
      ).subscribe(user.activity$)
    }
  }

  getUsersActivity() {
    return this.#usersActivity$;
  }
}
