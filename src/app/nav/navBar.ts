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
            <li>
                <a class="arrow-button dropdown"><img class="arrow-button" src="/triangle-down.svg" alt="trianglebutton"></a>
                <a class="nav-link" routerLink="">Home</a>
            </li>
            <li>
                <div class="dropdown">
                    <a><img (click)="myFunction()" class="arrow-button" src="/triangle-down.svg" alt="trianglebutton"></a>
                    <a class="nav-link" routerLink="products">Products & Services</a>
                    <div id="my-dropdown" class="dropdown-content">
                        <a href="">Collection 1</a>
                        <a href="">Collection 2</a>
                    </div>
                </div>
            </li>
            <li>
                <a class="nav-link" routerLink="contact">Contact</a>
            </li>
            <li>
                <a class="nav-link" routerLink="about">About Us</a>
            </li>
        </ul>
        <div class="icons-div">
            <img class="icon" (click)="onClick()" src="/shopping-cart.svg" alt="shopping-cart"><p style="color: red;">{{cartService.parseCart()?.length}}</p>
            <img routerLink="auth/login" class="icon" src="/person-icon.svg" alt="profile-icon">
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
    ul li {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-link{
        text-decoration: none;
        padding: 0px 30px 0 10px;
        color: white;
    }
    .nav-link:visited { 
        color:white;}
    .nav-link:hover {
        color: #ad8a8a;
    }
    .nav-link:link { 
        color: white;
    }
    .icons-div {
        padding: 0 2rem;
        justify-self: end;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .icon:hover { 
        cursor: pointer;
    }
    .arrow-button {
        width: 30px;
        height: 30px;
        margin: 0;
        padding: 0;
        background-color: rgba($color: #000000, $alpha: 0);
        border: none;
        cursor: pointer;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        align-items: center;
        justify-content: center;
    }
    .dropdown-content {
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #f1f1f1;
        padding: 10px 10px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba($color: #000000, $alpha: 0.2);
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        text-decoration: none;
        padding: 10px 0;
    }
    .dropdown-content a:hover {

    }
    .show {
        display: flex;
    }
    `
})

export class NavBar {
    @Output() toggle = new EventEmitter<void>();

    onClick() {
        this.toggle.emit();
    }
    cartService = inject(CartService);

    myFunction() {
        document.getElementById("my-dropdown")?.classList.toggle("show");
    }
}