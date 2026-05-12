import { Component } from "@angular/core";


@Component ({
    selector: 'featured',
    template: `
    <div class="featured-container">
        <div class="featured-head">
            <h2>Featured On</h2>
        </div>
        <div class="featured-brands">
            <img class="featured-image" src="fujitsu-logo.svg" alt="brand">
            <img class="featured-image" src="dhl-logo.svg" alt="brand">
            <img class="featured-image" src="diamon-logo.svg" alt="brand">
            <img class="featured-image" src="motul-logo.svg" alt="brand">
        </div>
    </div>`,
    styleUrl: './featured.css',
})

export class Featured {

}