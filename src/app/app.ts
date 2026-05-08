import {Component} from '@angular/core';
import { HomePage } from './home/home';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NavBar } from './nav/navBar';
import { Cart } from "./cart/cart";
import { FooterApp } from './footer/footerApp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <router-outlet/>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  mostrarCarrito = false;

  toggleCart() { 
    this.mostrarCarrito = !this.mostrarCarrito;
  }

}
