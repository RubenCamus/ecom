import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
    selector: 'nav-list',
    template: `
    <ul>
        <li><a routerLink="">Home</a> </li>
        <li><a routerLink="/contact">Contact</a> </li>
        <li><a routerLink="/about">About Us</a> </li>
        <li><a routerLink="/products">Products & Services</a> </li>
    </ul>
    `,
    styles: `
        ul { 
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        ul li a {
            display: block;
            text-decoration: none;
            color: black;
            padding: 0px 10px;
            
        }
        a:hover {
            color: red;
        }
        a:link { 
            color: blue;
        }
    `,
    imports: [RouterLink]
})

export class NavList {}