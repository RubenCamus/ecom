import { Component } from "@angular/core";

@Component ({
    selector: 'about',
    template: `
    <div class="page-wrapper">
        <div class="content-wrapper">
            <h1>What about BusinessName?</h1>
            <p>
                BusinessDescription
            </p>
            <h2>We love X that's why we carefully create Y</h2>
            <p>
                Why we make this
            </p>
            <img src="" alt="development image">
            <h2>Who are we</h2>
            <p>
                AboutUsDescription
            </p>
        </div>
    </div>
    `,
    styleUrl: 'about.css',
})

export class About {}