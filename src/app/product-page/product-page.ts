import { Component } from '@angular/core';

@Component({
  selector: 'product-page',
  imports: [],
  template: `
  <div class="page-container">
    <div class="images-container">
      <div>
        <img class="big-image" src="https://static.photos/640x360/1451" alt="">
      </div>
      <div class="images-row">
        <img class="small-image" src="https://static.photos/640x360/3920" alt="">
        <img class="small-image" src="https://static.photos/640x360/999" alt="">
      </div>
    </div>
    <h2>Product Name</h2>
    <span>Discounted price</span>
    <span>Old price</span>
    <input type="">
    <div class="buy-buttons">
      <button>Add to cart</button>
      <button>Buy now</button>
    </div>
  </div>`,
  styleUrl: './product-page.css',
})
export class ProductPage {}
