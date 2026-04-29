import {Component} from '@angular/core';
import { HomePage } from './home/home';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NavBar } from './nav/navBar';
import { Cart } from "./cart/cart";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavBar, Cart],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name"></header>
    </a>
    <section class="content">
      <nav-bar (toggle)="toggleCart()">
      </nav-bar>
      <router-outlet/>
    </section>
    @if (mostrarCarrito)  {
      <cart (close)="toggleCart()"/>
    }
  </main>`,
  styleUrls: ['./app.css'],
})
export class App {
  mostrarCarrito = false;

  toggleCart() { 
    this.mostrarCarrito = !this.mostrarCarrito;
  }

}
