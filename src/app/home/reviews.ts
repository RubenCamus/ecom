import { Component, DestroyRef } from '@angular/core';
import { ReviewsItem } from './reviews-item';
import { RouterLink } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { inject } from '@angular/core/primitives/di';
@Component({
  selector: 'reviews',
  templateUrl: 'reviews.html',
  styleUrl: './reviews.css',
  imports: [ReviewsItem, RouterLink],
})
export class Reviews {
  bpoint950px = '(max-width: 950px)';
  constructor(private observer: BreakpointObserver) {}
  protected isMobile = false;
  ngOnInit() {
    this.observer.observe(this.bpoint950px).subscribe((result) => {
      if (result.matches) {
        this.isMobile = true;
      } else if (!result.matches) {
        this.isMobile = false;
      }
      console.log(result);
    });
  }
  currentIndex = 0;
  reviews: any = [
    {
      id: 1,
      name: 'Soft Shampoo',
      stars: 4,
      description:
        'This shampoo is gentle yet effective, leaving hair feeling clean without stripping natural oils.',
      user: 'Daniel',
      category: 'shampoo',
      image: 'shampooImage.jpg',
    },
    {
      id: 2,
      name: 'Facial Cream',
      stars: 5,
      description:
        'This cream delivers deep hydration without feeling heavy or greasy. It absorbs quickly into the skin, leaving a soft, plump finish.',
      user: 'Chris Amber',
      category: 'creams',
      image: 'facialcream.jpg',
    },
  ];
  currentReview = this.reviews[this.currentIndex];
}
