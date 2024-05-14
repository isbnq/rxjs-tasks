import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task5Component } from './task-5.component';

const routes: Routes = [
  {
    path: '',
    component: Task5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task5RoutingModule { }
