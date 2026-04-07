import {Output,  EventEmitter, Component,} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Logo } from "./logo";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'nav-bar',
    template: `<nav><logo/>    <ul>
        <li><a routerLink="">Home</a> </li>
        <li><a routerLink="products">Products & Services</a> </li>
        <li><a routerLink="contact">Contact</a> </li>
        <li><a routerLink="about">About Us</a> </li>
        <li><img class="shopping-cart" (click)="onClick()" src="/shopping-cart.svg" alt="shopping-cart"></li>
    </ul> </nav>`,
    imports: [Logo, RouterLink],
    styles: `
    nav { 
        display: flex;
        padding: 0px 10px;
        border-radius: 5px;
        width: max-content;
        margin-left: 50px;
        margin-bottom: 20px;
        font-size: 24px;
    }
    ul { 
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    ul li a {
        display: block;
        text-decoration: none;
        padding: 0px 50px;
        
    }
    a:visited { color:black;}
    a:hover {
        color: red;
    }
    a:link { 
        color: blue;
    }
    .shopping-cart { 
        width: 30px;
        height: 30px;
    }
    `
})

export class NavBar {
    @Output() toggle = new EventEmitter<void>();

    onClick() {
        this.toggle.emit();
    }
}