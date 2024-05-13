import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tasks } from './tasks';

const routes: Routes = tasks.map((TaskComponent, i) => ({
  path: `task-${i + 1}`,
  title: `Задача ${i + 1}`,
  component: TaskComponent
}));

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
