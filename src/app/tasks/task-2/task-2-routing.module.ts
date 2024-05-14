import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task2Component } from './task-2.component';

const routes: Routes = [
  {
    path: '',
    component: Task2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
