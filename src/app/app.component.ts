import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-flow: column wrap;
      gap: 1rem;

      justify-content: center;
      align-items: stretch;

      padding: 1rem .5rem;
      margin: 0 auto;

      max-width: 1280px;
    }
  `
})
export class AppComponent {
  title = 'rxjs-tasks';
}
