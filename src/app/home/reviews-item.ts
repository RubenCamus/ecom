import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'reviews-item',
  templateUrl: 'reviews-item.html',
  styleUrl: './reviews.css',
  imports: [RouterLink],
})
export class ReviewsItem {
  @Input() curReview!: any;
}
