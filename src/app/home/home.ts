import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Certificates } from "./certificates";
import { Featured } from "./featured";
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
    
    <div class="reviews-container">
        <div class="reviews-head">
            <h2>Customer Top Picks</h2>
        </div>
        <div class="reviews-box">
            <ul class="reviews-list">
                <li class="reviews-item">
                    <div class="reviews-image-container">
                        <img class="reviews-image" src="https://static.photos/640x360/20" alt="product image">
                    </div>
                    <div class="reviews-text">
                        <h2>Product Name</h2>
                        <p>Stars Placeholder</p>
                        <p>"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"</p>
                        <p>Reviewer's name</p>
                        <button>Browse product category</button>
                    </div>
                </li>
                <li class="reviews-item">
                    <div class="reviews-image-container">
                        <img class="reviews-image" src="https://static.photos/640x360/20" alt="product image">
                    </div>
                    <div class="reviews-text">
                        <h2>Product Name</h2>
                        <p>Stars Placeholder</p>
                        <p>"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"</p>
                        <p>Reviewer's name</p>
                        <button>Browse product category</button>
                    </div>
                </li>
            </ul>    
        </div>
    </div>
    `,
    styleUrl: './home.css',
    imports: [RouterLink, Certificates, Featured]
})

export class HomePage {}