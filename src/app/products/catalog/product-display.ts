import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'product-display',
  template: ` <div class="product-container">
    <img class="product-image" src="https://static.photos/640x360/124" alt="product-image" />
    <div class="product-text">
      <h2>Product Title</h2>
      <div class="price-list">
        <span class="discounted-price">Discounted Price</span>
        <span class="old-price">Old Price</span>
        <div class="button-div">
          <button
            (click)="cartService.addToCart({ id: 1, name: 'Camiseta roja', price: 10 })"
            class="primary-button add-to-cart btn"
          >
            Add to Cart
          </button>
          <button class="secondary-button btn">View Details</button>
        </div>
      </div>
    </div>
  </div>`,
  styleUrl: './productdisplay.css',
})
export class ProductDisplay {
  cartService = inject(CartService);
}
