import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="light-blue darken-1">
    <div class="nav-wrapper">
      <a routerLink="/" class="brand-logo center">MathApp</a>
    </div>
  </nav>
  `
})

export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
