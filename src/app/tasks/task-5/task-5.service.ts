import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, map, debounceTime, merge, distinctUntilChanged, share, Subscription } from 'rxjs';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class Task5Service extends UsersService <{
  activity$: BehaviorSubject<boolean>,
  subscription?: Subscription
}> implements OnDestroy {
  // list of users ids and its activity observable
  private usersActivityList: { id: number, activity$: BehaviorSubject<boolean> }[] = []
  private usersActivity$ = new BehaviorSubject(this.usersActivityList)

  ngOnDestroy(): void {
    [...this.usersEntries].map(([_, { subscription }]) => subscription?.unsubscribe());
  }

  override addUser(): number {
    const userActivity$ = new BehaviorSubject(false);

    const userId = super.addUser({ activity$: userActivity$ });

    this.usersActivityList.push({ id: userId, activity$: userActivity$ });
    this.usersActivity$.next(this.usersActivityList);

    return userId;
  }

  override delUser(id: number) {
    super.delUser(id);

    this.usersActivityList = [...this.usersEntries].map(([id, { activity$ }]) => ({ id, activity$ }));
    this.usersActivity$.next(this.usersActivityList);
  }

  setUserActivity(id: number, newActivity$: Observable<unknown>) {
    const userData = this.getUserData(id);

    if (userData) {
      newActivity$ = newActivity$.pipe(share());  // (оптимизация) шарим поток между всеми подписчиками
      userData.subscription?.unsubscribe();  // отписываемся, если была подписка до этого

      userData.subscription = merge(
        newActivity$.pipe(
          map(() => true)
        ),
        newActivity$.pipe(  // Если нет активности 5 секунд, шлём, что неактивен
          debounceTime(5000),
          map(() => false)
        )
      ).pipe(
        distinctUntilChanged()  // (оптимизация) не шлём дальше, если предыдущее значение было таким же
      ).subscribe(userData.activity$)
    }
  }

  getUsersActivity() {
    return this.usersActivity$;
  }
}
