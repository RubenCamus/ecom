import {Component} from '@angular/core';
import { HomePage } from './home/home';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NavBar } from './nav/navBar';
import { Cart } from "./cart/cart";
import { FooterApp } from './footer/footerApp';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavBar, Cart, FooterApp],
  template: `
    <nav-bar (toggle)="toggleCart()">
    </nav-bar>
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name"></header>
    </a>
    <section class="content">
      <router-outlet/>
    </section>
    @if (mostrarCarrito)  {
      <cart (close)="toggleCart()"/>
    }
  </main>
  <footer-app/>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  mostrarCarrito = false;

  toggleCart() { 
    this.mostrarCarrito = !this.mostrarCarrito;
  }

}
