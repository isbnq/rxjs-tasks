import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <ul class="links">
        <ng-container *ngFor="let link of links">
          <li *ngIf="link.path !== undefined">
            <a class="link__a" [routerLink]="link.path">
              {{ link.title }}
            </a>
          </li>
        </ng-container>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      width: 100%;
      border-radius: 7px;
      background-color: rgba(CornflowerBlue, .2);
    }

    .links {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;

      display: flex;
      flex-flow: row wrap;
      gap: 1em;

      justify-content: space-evenly;
      align-items: center;

      height: 2em;
    }

    .link__a {
      color: black;
      &:hover {
        color: SteelBlue;
      }

      transition: color .16s ease-out;
    }
  `]
})
export class NavbarComponent implements OnInit {
  links: ReadonlyArray<Pick<Route, 'path' | 'title'>> = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links = this.router.config;
  }
}
