import { Component, DestroyRef } from '@angular/core';
import { ReviewsItem } from './reviews-item';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
@Component({
  selector: 'reviews',
  templateUrl: 'reviews.html',
  styleUrl: './reviews.css',
  imports: [ReviewsItem, RouterLink],
})
export class Reviews {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private destroyRef: DestroyRef,
  ) {}
  ngOnInit() {
    var isMobile = this.breakpointObserver.isMatched('(max-width: 950px)');
  }
  isMobile = true;
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
