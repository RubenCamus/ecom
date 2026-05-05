import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'product-page',
  imports: [],
  template: `
  <div class="page-container">
    <div class="top-container">
      <div>
        <img class="big-image" src="https://static.photos/640x360/1451" alt="">
      </div>
      <div class="product-content">
        <h2>Product Name</h2>
        <span>Discounted price</span>
        <span style="color: red; padding-left:10px; padding-right: 10px;">Old price</span>
        <input type="">
        <div class="buy-buttons">
          <button style="margin-right:10px;margin-top: 10px;">Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
    <div class="images-row">
      <ul class="images-list">
        <li><img class="small-image" (onclick)="change()" src="https://static.photos/640x360/1451" alt=""></li>
        <li><button class="image-button"><img class="small-image" src="https://static.photos/640x360/3920" alt=""></button></li>
        <li><button class="image-button"><img class="small-image" src="https://static.photos/640x360/999" alt=""></button></li>
      </ul>
    </div>
  </div>
  `,
  styleUrl: './product-page.css',
})
export class ProductPage {
  productService = inject(ProductService);

  change() {

  }
}
