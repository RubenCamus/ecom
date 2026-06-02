import { Component } from '@angular/core';

@Component({
  selector: 'certificates',
  template: ` <div class="certificates-bar">
    <div class="certificate-box">
      <img class="certificate-image" src="ship.svg" alt="certificate-icon" />
      <div class="certificate-text-wrapper">
        <p class="certificate-title">FREE SHIPPING</p>
        <p>When you spend 50.00$ minimum on all online orders.</p>
        <span>DETAILS</span>
      </div>
    </div>
    <div class="certificate-box">
      <img class="certificate-image" src="dollar.svg" alt="certificate-icon" />
      <div class="certificate-text-wrapper">
        <p class="certificate-title">PRICE MATCHING</p>
        <p>Present a qualifying competitor's ad and we'll gladly price match!</p>
        <span>DETAILS</span>
      </div>
    </div>
    <div class="certificate-box">
      <img class="certificate-image" src="box.svg" alt="certificate-icon" />
      <div class="certificate-text-wrapper">
        <p class="certificate-title">STORE PICKUP</p>
        <p>Buy online, and then pick up your order in store or curbside.</p>
        <span>DETAILS</span>
      </div>
    </div>
  </div>`,
  styleUrl: './certificates.css',
})
export class Certificates {}
