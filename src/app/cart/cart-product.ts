import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'cart-product',
  template: `
    <div class="product-wrapper">
      <div class="trash-wrapper">
        <img class="trash-icon" src="trash-icon.svg" alt="trash icon" />
      </div>
      <div class="product-content-wrapper">
        <p class="product-name">{{ productName }}</p>
        <span>{{ price }}</span>
        <div class="amount-wrapper">
          <img class="amount-icon" src="minus-icon.svg" alt="minus icon" />
          <span>{{ quantity }}</span>
          <img class="amount-icon" src="add-icon.svg" alt="add icon" />
        </div>
      </div>
      <img class="product-image" src="{{ image }}" alt="product image" />
    </div>
  `,
  styleUrl: 'cart.css',
})
export class CartProduct {
  @Input() productName = '';
  @Input() price = 0;
  @Input() quantity = 0;
  @Input() image: any;
}
