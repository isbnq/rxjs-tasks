import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task-2-routing.module';
import { Task2Component } from './task-2.component';


@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    Task2RoutingModule
  ],
  bootstrap: [Task2Component]
})
export class Task2Module { }
