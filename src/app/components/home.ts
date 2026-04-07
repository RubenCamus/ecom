import { Component } from "@angular/core";
@Component ({
    selector: "home-page",
    template: `
    <div class="landing">
        <div class="landing-container">
        <h2 style="font-size: 48px;"> 40% OFF</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <button class="landing-button">SHOP NOW</button>
        </div>    
        <div>
            <img class="landing-image" src="https://static.photos/640x360/193" alt="landing-image">
        </div>
    </div>
    <div class="certificates-bar">
        <img class="certificate-image" src="https://static.photos/640x360/1" alt="certificate-icon">
        <div class="certificate-box">
            <p class="certificate-title">Lorem ipsum</p>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </div>
        <img class="certificate-image" src="https://static.photos/640x360/1" alt="certificate-icon">
        <div class="certificate-box">
            <p class="certificate-title">Lorem ipsum</p>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </div>
        <img class="certificate-image" src="https://static.photos/640x360/1" alt="certificate-icon">
        <div class="certificate-box">
            <p class="certificate-title">Lorem ipsum</p>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </div>
    </div>
    <div class="featured-container">
        <div class="featured-head">
            <h2>Featured On</h2>
        </div>
        <div class="featured-brands">
            <img class="featured-image" src="https://static.photos/640x360/90" alt="brand">
            <img class="featured-image" src="https://static.photos/640x360/94" alt="brand">
            <img class="featured-image" src="https://static.photos/640x360/190" alt="brand">
            <img class="featured-image" src="https://static.photos/640x360/20" alt="brand">
        </div>
    </div>
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
    styleUrl: '../styles/home.css'
})

export class HomePage {}