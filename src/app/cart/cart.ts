import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CartService } from '../services/cart-service';
import { CartProduct } from './cart-product';

@Component({
  selector: 'cart',
  template: `
    <div class="cart-container">
      <div class="cart-top-container">
        <h2 class="cart-title">Your Cart</h2>
        <button (click)="clicked()" class="cart-close-button">X</button>
      </div>
      <div class="products">
        @for (product of cartContent; track product.id) {
        <cart-product [productName]="product.name" [price]="product.price" [quantity]="product.quantity" [image]="product.image"></cart-product>
        }
      </div>
      <div class="bottom-container">
        <div class="total-wrapper">
          <span>Subtotal:</span>
          <span>$100</span>
        </div>
        <button class="checkout-button">Checkout</button>
        <img src="" alt="" />
      </div>
    </div>
  `,
  imports: [CartProduct],
  styleUrl: './cart.css',
})
export class Cart {
  @Output() close = new EventEmitter<void>();

  clicked() {
    this.close.emit();
  }

  cartService = inject(CartService);

  cartContent = this.cartService.parseCart();
}
