import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task-4-routing.module';
import { Task4Component } from './task-4.component';


@NgModule({
  declarations: [
    Task4Component
  ],
  imports: [
    CommonModule,
    Task4RoutingModule
  ],
  bootstrap: [Task4Component]
})
export class Task4Module { }
