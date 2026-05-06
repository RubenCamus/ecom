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
                    <p>{{cartService.getProduct(1).name}}</p> <span>Quantity: {{cartService.getProduct(1).quantity}}</span><button (click)="cartService.addToCart({id: 1,name: 'Camiseta roja', price: 10})">Add Item</button> <button (click)="cartService.removeProduct({id: 1,name: 'Camiseta roja', price: 10})">Remove Item</button>
                </div>
                <div class="product-wrapper">
                    <p>{{cartService.getProduct(2).name}}</p> <span>Quantity: {{cartService.getProduct(2).quantity}}</span><button (click)="cartService.addToCart({id: 2,name: 'Camiseta verde', price: 5})">Add Item</button> <button (click)="cartService.removeProduct({id: 2,name: 'Camiseta verde', price: 5})">Remove Item</button>
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