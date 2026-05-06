import {Output,  EventEmitter, Component, inject,} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Logo } from "../logo";
import { RouterLink } from "@angular/router";
import { CartService } from "../services/cart-service";

@Component({
    selector: 'nav-bar',
    template: `
    <nav>
        <logo/>
        <ul>
            <li><a routerLink="">Home</a> </li>
            <li><a routerLink="products">Products & Services</a> </li>
            <li><a routerLink="contact">Contact</a> </li>
            <li><a routerLink="about">About Us</a> </li>
        </ul>
        <div class="icons-div">
            <img class="icon" (click)="onClick()" src="/shopping-cart.svg" alt="shopping-cart"><p style="color: red;">{{cartService.parseCart()?.length}}</p>
            <img routerLink="login" class="icon" src="/person-icon.svg" alt="profile-icon">
        </div>
    </nav>
    `,
    imports: [Logo, RouterLink],
    styles: `
    nav {
        font-family: 'Outfit', sans-serif;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        font-size: 24px;
        padding: 0rem 0rem 0px;
        background-color: black;
    }
    ul {
        padding: 0rem 0 0 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
    }
    ul li a {
        text-decoration: none;
        padding: 0px 30px;
        color: white;
    }
    a:visited { color:black;}
    a:hover {
        color: red;
    }
    a:link { 
        color: blue;
    }
    .icons-div {
        padding: 1.5rem 4rem 0 0 ;
        justify-self: end;
        display: flex;
        gap: 6px;
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .icon:hover { 
        cursor: pointer;
    }
    `
})

export class NavBar {
    @Output() toggle = new EventEmitter<void>();

    onClick() {
        this.toggle.emit();
    }
    cartService = inject(CartService);
}