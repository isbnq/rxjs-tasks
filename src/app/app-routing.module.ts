import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: `task-1`,
    title: `Задача 1`,
    loadChildren: () => import('./tasks/task-1/task-1.module').then(m => m.Task1Module)
  },
  {
    path: `task-2`,
    title: `Задача 2`,
    loadChildren: () => import('./tasks/task-2/task-2.module').then(m => m.Task2Module)
  },
  {
    path: `task-3`,
    title: `Задача 3`,
    loadChildren: () => import('./tasks/task-3/task-3.module').then(m => m.Task3Module)
  },
  {
    path: `task-4`,
    title: `Задача 4`,
    loadChildren: () => import('./tasks/task-4/task-4.module').then(m => m.Task4Module)
  },
  {
    path: `task-5`,
    title: `Задача 5`,
    loadChildren: () => import('./tasks/task-5/task-5.module').then(m => m.Task5Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
