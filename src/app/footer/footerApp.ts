import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  template: `
    <footer>
      <div class="group-a">
        <div class="socials-wrapper">
          <a href="https://www.twitter.com/{{ twitter }}"
            ><img class="social-logo" src="/twitter-logo.svg" alt="Twitter Logo"
          /></a>
          <a href="instagram.com"
            ><img class="social-logo" src="/instagram-fill.svg" alt="Instagram Logo"
          /></a>
          <a href="facebook.com"
            ><img class="social-logo" src="/facebook-logo.svg" alt="Facebook Logo"
          /></a>
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
            <p>C/58 Passeig de gràcia</p>
          </div>
          <div class="store">
            <h3>Madrid Location</h3>
            <p>Gran Via, 41</p>
          </div>
          <div class="store">
            <h3>Paris Location</h3>
            <p>Porte Berger, 106</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footerApp.css',
})
export class FooterApp {
  twitter = 'ElonMusk';
}
