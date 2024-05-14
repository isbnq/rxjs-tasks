import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task5RoutingModule } from './task-5-routing.module';
import { Task5Component } from './task-5.component';
import { UsersChatComponent } from './users-chat/users-chat.component';


@NgModule({
  declarations: [
    Task5Component,
    UsersChatComponent
  ],
  imports: [
    CommonModule,
    Task5RoutingModule
  ],
  bootstrap: [Task5Component]
})
export class Task5Module { }
