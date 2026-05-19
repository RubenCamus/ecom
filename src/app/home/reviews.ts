import { Component } from '@angular/core';
import { ReviewsItem } from './reviews-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'reviews',
  template: ` <div class="reviews-container">
    <div class="reviews-head">
      <h2 id="reviews-title">Customer Top Picks</h2>
    </div>
    <div class="reviews-box">
      <ul class="reviews-list">
        @for (review of reviews; track review.id) {
          <li class="reviews-item">
            <div class="reviews-image-container">
              <img class="reviews-image" src="{{ review.image }}" alt="product image" />
            </div>
            <div class="reviews-text">
              <h2>{{ review.name }}</h2>
              <p>{{ review.stars }}</p>
              <p>{{ review.description }}</p>
              <p>{{ review.user }}</p>
              <button class="secondary-button" routerLink="/categories/{{ review.category }}">
                Browse Product Category
              </button>
            </div>
          </li>
        }
      </ul>
    </div>
  </div>`,
  styleUrl: './reviews.css',
  imports: [ReviewsItem, RouterLink],
})
export class Reviews {
  reviews: any = [
    {
      id: 1,
      name: 'Soft Shampoo',
      stars: 4,
      description:
        'This shampoo is gentle yet effective, leaving hair feeling clean without stripping natural oils.',
      user: 'Daniel',
      category: 'Shampoo',
      image: 'shampooImage.jpg',
    },
    {
      id: 2,
      name: 'Facial Cream',
      stars: 5,
      description:
        'This cream delivers deep hydration without feeling heavy or greasy. It absorbs quickly into the skin, leaving a soft, plump finish.',
      user: 'Chris Amber',
      category: 'Creams',
      image: 'facialcream.jpg',
    },
  ];
}
