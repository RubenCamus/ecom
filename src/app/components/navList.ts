import { Component } from "@angular/core";


@Component ({
    selector: 'nav-list',
    template: `
    <ul>
        <li><a href="index.html">Home</a> </li>
        <li><a href="contact.html">Contact</a> </li>
        <li><a href="about.html">About Us</a> </li>
        <li><a href="products.html">Products & Services</a> </li>
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
    `
})

export class NavList {}