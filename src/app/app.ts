import {Component} from '@angular/core';
import { HomePage } from './components/home';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NavBar } from "./components/navBar";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavBar],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name"></header>
        <img class="brand-logo" src="/public/favicon.ico" alt="logo" aria-hidden="true">
    </a>
    <section class="content">
      <nav-bar/>
      <router-outlet/>
    </section>
    <footer>Pepito</footer>
  </main>`,
  styleUrls: ['./app.css'],
})
export class App {}
