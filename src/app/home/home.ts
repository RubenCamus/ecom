import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Certificates } from './certificates';
import { Featured } from './featured';
import { Reviews } from './reviews';
@Component({
  selector: 'home-page',
  template: `
    <div class="landing">
      <div class="landing-container">
        <h2>40% OFF</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <button routerLink="products" class="landing-button">SHOP NOW</button>
      </div>
      <div class="bg-image">
        <img class="landing-image" src="/landingHero.png" alt="landing-image" />
      </div>
    </div>
    <certificates />
    <featured />
    <reviews />
  `,
  styleUrl: './home.css',
  imports: [RouterLink, Certificates, Featured, Reviews],
})
export class HomePage {}
