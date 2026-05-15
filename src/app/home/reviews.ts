import { Component } from '@angular/core';
import { ReviewsItem } from './reviews-item';

@Component({
  selector: 'reviews',
  template: ` <div class="reviews-container">
    <div class="reviews-head">
      <h2 id="reviews-title">Customer Top Picks</h2>
    </div>
    <div class="reviews-box">
      <ul class="reviews-list">
        <li class="reviews-item">
          <reviews-item />
        </li>
        <li class="reviews-item">
          <div class="reviews-image-container">
            <img class="reviews-image" src="/facialcream.jpg" alt="product image" />
          </div>
          <div class="reviews-text">
            <h2>Facial cream</h2>
            <p>Stars Placeholder</p>
            <p>
              "This cream delivers deep hydration without feeling heavy or greasy. It absorbs
              quickly into the skin, leaving a soft, plump finish."
            </p>
            <p>Chris Amber, England</p>
            <button>Browse product category</button>
          </div>
        </li>
      </ul>
    </div>
  </div>`,
  styleUrl: './reviews.css',
  imports: [ReviewsItem],
})
export class Reviews {}
