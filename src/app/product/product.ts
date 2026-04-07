import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'product',
  imports: [],
  template: `
  <div>
    <p></p>
  </div>`,
  styleUrl: './product.css',
})
export class Product {
  productService = inject(ProductService);
}
