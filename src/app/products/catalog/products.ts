import { Component, inject } from '@angular/core';
import { ProductDisplay } from './product-display';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'products',
  template: `
    <div class="products-container">
      <h1>Products</h1>
      <p style="">Sort by:</p>
      <br />
      <div class="products-wrapper">
        <div class="products-display">
          <!-- This for loop loads product cards dynamically on the amount of products inside the mock data below -->
          @for (product of products; track product.id) {
            <div class="product-card">
              <img class="product-image" src="{{ product.image }}" alt="{{ product.name }}" />
              <div class="product-text">
                <h2>{{ product.name }}</h2>
                <span class="discounted-price"> {{ product.price }} </span>
                <div class="button-div">
                  <button
                    class="btn primary-button add-to-cart"
                    (click)="cartService.addToCart(product.id)"
                  >
                    Add to cart
                  </button>
                </div>
                <button class="secondary-button btn">View Details</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './products.css',
  imports: [ProductDisplay],
})
export class Products {
  cartService = inject(CartService);

  products: any = [
    {
      id: 1,
      name: 'Facial Cream',
      description: 'Lorem ipsum dolor sit amet',
      price: 29.99,
      image: 'facialcream.jpg',
    },
    {
      id: 2,
      name: 'Hair Shampoo',
      description: 'Lorem ipsum dolor sit amet',
      price: 9.99,
      image: 'shampooImage.jpg',
    },
    {
      id: 3,
      name: 'Body wash',
      description: 'A liquid cleanser that is specifically formulated for use on the body',
      price: 4.99,
      image:
        'https://images.unsplash.com/photo-1700107648901-02970a78a2cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Eau de Parfum',
      description: 'Lorem ipsum dolor sit amet',
      price: 59.99,
      image:
        'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm90b2dyYWYlQzMlQURhJTIwZGUlMjBwZXJmdW1lc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
}
