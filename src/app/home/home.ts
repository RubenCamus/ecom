import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Certificates } from "./certificates";
import { Featured } from "./featured";
import { Reviews } from "./reviews";
@Component ({
    selector: "home-page",
    template: `
    <div class="landing">
        <div class="landing-container">
        <h2 style="font-size: 48px;"> 40% OFF</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <button routerLink="products" class="landing-button">SHOP NOW</button>
        </div>    
        <div>
            <img class="landing-image" src="https://static.photos/640x360/193" alt="landing-image">
        </div>
    </div>
    <certificates/>
    <featured/>
    <reviews/>
    `,
    styleUrl: './home.css',
    imports: [RouterLink, Certificates, Featured, Reviews]
})

export class HomePage {}