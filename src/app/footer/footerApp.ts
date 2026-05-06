import { Component } from "@angular/core";


@Component ({
    selector: 'footer-app',
    template: `
    <footer>
        <div>
            <div class="socials">
                <img src="" alt="Twitter Logo">
                <img src="" alt="Instagram Logo">
                <img src="" alt="Facebook Logo">
                <a href="">#TestShop</a>
            </div>
            <div class="policies-wrapper">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
        <div>
            <h2>STORE LOCATIONS</h2>
            <div class="stores-wrapper">
                <div class="store">
                    <h3>Barcelona Location</h3>

                </div>
                <div class="store">
                    <h3>Madrid Location</h3>
                </div>
                <div class="store">
                    <h3>Paris Location</h3>
                </div>
            </div>
        </div>
    </footer>
    `,
    styleUrl: './footerApp.css',
})

export class FooterApp {

}