import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task3RoutingModule } from './task-3-routing.module';
import { Task3Component } from './task-3.component';


@NgModule({
  declarations: [
    Task3Component
  ],
  imports: [
    CommonModule,
    Task3RoutingModule
  ],
  bootstrap: [Task3Component]
})
export class Task3Module { }
