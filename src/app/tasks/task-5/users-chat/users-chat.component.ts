import { OnInit, AfterViewInit, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { UsersChatService } from './users-chat.service';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-users-chat',
  templateUrl: './users-chat.component.html',
  styleUrl: './users-chat.component.scss',
  providers: [UsersChatService]
})
export class UsersChatComponent implements OnInit, AfterViewInit, OnDestroy {
  username!: string
  usersActivity$!: Observable<Observable<{ id: number, active: boolean }>[]>

  @ViewChild('chattextinput') chattextinput!: ElementRef
  
  constructor(private usersChat: UsersChatService) {}

  ngOnInit(): void {
    this.username = `User-${this.usersChat.getUserId()}`;
    this.usersActivity$ = this.usersChat.getUsersActivity();
  }

  ngAfterViewInit(): void {
    this.usersChat.setActivity(fromEvent(this.chattextinput.nativeElement, 'input'));
  }

  ngOnDestroy(): void {
    
  }
}
