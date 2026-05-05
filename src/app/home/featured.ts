import { Component } from "@angular/core";


@Component ({
    selector: 'featured',
    template: `
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
    </div>`,
    styleUrl: './home.css',
})

export class Featured {

}