import { afterNextRender, Component, HostListener } from '@angular/core';
import { HomePage } from '../home/home';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBar } from '../nav/navBar';
import { Cart } from '../cart/cart';
import { FooterApp } from '../footer/footerApp';
import { ViewportScroller } from '@angular/common';
import { inject } from '@angular/core/primitives/di';

@Component({
  selector: 'main-layout',
  imports: [RouterLink, RouterOutlet, NavBar, Cart, FooterApp],
  template: `
    <nav-bar (toggle)="toggleCart()"> </nav-bar>
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name"></header>
      </a>
      <section class="content">
        <router-outlet />
      </section>
      @if (mostrarCarrito) {
        <cart (close)="toggleCart()" />
      }
    </main>
    <footer-app />
  `,
  host: {},
  styleUrls: ['./mainLayout.css'],
})
export class MainLayout {
  @HostListener('window:scroll', ['$event'])
  scrollEvent($event: Event) {
    console.log('scroll');
  }

  mostrarCarrito = false;
  toggleCart() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
