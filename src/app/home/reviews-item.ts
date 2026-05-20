import { Component } from '@angular/core';

@Component({
  selector: 'reviews-item',
  template: ` <div style="display: flex;">
      <div class="reviews-image-container">
        <img class="reviews-image" src="/shampooImage.jpg" alt="product image" />
      </div>
      <div class="reviews-text">
        <h2>SOFT SHAMPOO</h2>
        <p>Stars Placeholder</p>
        <p>Review placeholder</p>
        <p>Daniel Kovacs, Hungary</p>
        <div class="button-div">
          <button class="secondary-button ">Browse product category</button>
        </div>
      </div>
    </div>
    >`,
  styleUrl: './reviews.css',
})
export class ReviewsItem {
  testProduct = {
    name: 'Soft Shampoo',
    stars: '4',
    description:
      'This shampoo is gentle yet effective, leaving hair feeling clean without stripping natural oils.',
    user: 'Daniel',
    category: 'Shampoo',
  };
}
