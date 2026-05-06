import { Component } from "@angular/core";



@Component ({
    selector: 'reviews',
    template: `
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
    </div>`,
    styleUrl: './reviews.css'
})

export class Reviews { 

}