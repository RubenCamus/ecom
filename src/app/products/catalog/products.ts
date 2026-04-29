import { Component } from "@angular/core";
import { ProductDisplay } from "./product-display";


@Component ({
    selector: 'products',
    template: ` 
    <h1>Products</h1>
    <div class="products-container">
       <p>Sort by: </p> <br>
        <div class="products-display">
            <product-display/>
        </div>
    </div>
    `,
    styleUrl: './products.css',
    imports: [ProductDisplay]
})

export class Products {
}