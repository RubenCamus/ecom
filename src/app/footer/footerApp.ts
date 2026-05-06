import { Component } from "@angular/core";


@Component ({
    selector: 'footer-app',
    template: `
    <footer>
        <div class="group-a">
            <div class="socials-wrapper">
                <a href=""><img src="" alt="Twitter Logo"></a>
                <a href=""><img src="" alt="Instagram Logo"></a>
                <a href=""><img src="" alt="Facebook Logo"></a>
                <a href="">#TestShop</a>
            </div>
            <div class="policies-wrapper">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Work With Us</a>
                <a href="">Customer Service</a>
                <a href="">Gift Cards</a>
                <a href="">Contact Us</a>
                <a href="">Sign Up</a>
                <a href="">Order Tracking</a>
                <a href="">Return Policy</a>
            </div>
        </div>
        <div class="group-b">
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