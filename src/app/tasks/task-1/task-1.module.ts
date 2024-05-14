import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task-1-routing.module';
import { Task1Component } from './task-1.component';


@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    Task1RoutingModule
  ],
  bootstrap: [Task1Component]
})
export class Task1Module { }
