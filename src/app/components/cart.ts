import { Component, Output, EventEmitter, inject } from "@angular/core";
import { CartService } from "../cart-service";


@Component ({
    selector: 'cart',
    template: `
        <div class="cart-container">
            <button (click)="clicked()" class="cart-close-button">Close</button>
            <p style="color: white">{{cartService.getProduct(1).name}}</p> <span style="color: white;">Quantity: {{cartService.getProduct(1).quantity}}</span><button (click)="cartService.addToCart({id: 1,name: 'Camiseta roja', price: 10})">Add Item</button> <button (click)="cartService.removeProduct({id: 1,name: 'Camiseta roja', price: 10})">Remove Item</button>
            <p style="color: white">{{cartService.getProduct(2).name}}</p> <span style="color: white;">Quantity: {{cartService.getProduct(2).quantity}}</span><button (click)="cartService.addToCart({id: 2,name: 'Camiseta verde', price: 5})">Add Item</button> <button (click)="cartService.removeProduct({id: 2,name: 'Camiseta verde', price: 5})">Remove Item</button>
        </div>
        `,
    imports: [], 
    styleUrl: '../styles/cart.css',
})
export class Cart {
    @Output() close = new EventEmitter<void>();

    clicked() {
        this.close.emit();
    }

    cartService = inject(CartService);
}