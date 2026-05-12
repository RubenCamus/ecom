import { Component, Output, EventEmitter, inject } from "@angular/core";
import { CartService } from "../services/cart-service";


@Component ({
    selector: 'cart',
    template: `
        <div class="cart-container"> 
            <div class="cart-top-container">
                <h2 class="cart-title">Your Cart</h2>
                <button (click)="clicked()" class="cart-close-button">X</button>
            </div>
            <div class="products">    
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
                <div class="product-wrapper">
                    <p>{{cartService.getProduct(2).name}}</p> <span>Quantity: {{cartService.getProduct(2).quantity}}</span><button class="button1" (click)="cartService.addToCart({id: 2,name: 'Camiseta verde', price: 5})">Add Item</button> <button class="button1" (click)="cartService.removeProduct({id: 2,name: 'Camiseta verde', price: 5})">Remove Item</button>
                </div>
            </div>
            <div class="bottom-container">
                <div class="total-wrapper">
                    <span>Subtotal:</span>
                    <span>$100</span>
                </div>
                <button class="checkout-button">Checkout</button>
                <img src="" alt="">
            </div>
        </div>
        `,
    imports: [], 
    styleUrl: './cart.css',
})
export class Cart {
    @Output() close = new EventEmitter<void>();

    clicked() {
        this.close.emit();
    }
    
    cartService = inject(CartService);
}