import { Output, EventEmitter, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Logo } from '../logo';
import { RouterLink, Scroll } from '@angular/router';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navBar.html',
  imports: [Logo, RouterLink],
  styleUrl: './navBar.css',
})
export class NavBar {
  @Output() toggle = new EventEmitter<void>();

  onClick() {
    this.toggle.emit();
  }
  cartService = inject(CartService);

  myFunction() {
    document.getElementById('my-dropdown')?.classList.toggle('show');
  }
}
