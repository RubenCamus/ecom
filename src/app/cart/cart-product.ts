import { Component } from "@angular/core";


@Component ({
    selector: 'cart-product',
    template: `
    <div class="product-wrapper">
        <div class="trash-wrapper">
            <img class="trash-icon" src="trash-icon.svg" alt="trash icon">
        </div>
        <div class="product-content-wrapper">
            <p>Product Name</p>
            <span>Price</span>
            <div class="amount-wrapper">
                <img class="amount-icon" src="minus-icon.svg" alt="minus icon">
                <span>0</span>
                <img class="amount-icon" src="add-icon.svg" alt="add icon">
            </div>
        </div>
        <img src="product-image" alt="product image">
    </div>
                `,
    styleUrl: 'cart.css'
})

export class CartProduct {

}