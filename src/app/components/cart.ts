import { Component, Output, EventEmitter, inject } from "@angular/core";
import { CartService } from "../cart-service";


@Component ({
    selector: 'cart',
    template: `
        <div class="cart-container">
            <button (click)="clicked()" class="cart-close-button">Close</button>
            <p style="color: white">{{cartService.getProduct(1)}}</p> <button>Add Item</button>
            <p style="color: white">{{cartService.getProduct(2)}}</p> <button>Add Item</button>
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