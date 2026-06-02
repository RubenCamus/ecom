import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <div class="page-wrapper">
      <div class="content-wrapper">
        <h2>What about {{ business.name }}?</h2>
        <p>
          {{ business.description }}
        </p>
        <h2>We love personal care</h2>
        <p>
          We created {{ business.name }} to offer products people can trust every day. Our goal is
          to combine quality, comfort, and care into simple solutions that make daily life healthier
          and easier.
        </p>
        <img class="business-image" src="businessImage1.jpg" alt="development image" />
        <h2>Who are we</h2>
        <p>
          At <strong>{{ business.name }}</strong> {{ business.about }}
        </p>
        <img class="business-image" src="businessImage2.jpg" alt="business image" />
      </div>
    </div>
  `,
  styleUrl: 'about.css',
})
export class About {
  business: any = {
    name: 'Velore Essentials',
    description:
      'We are a dedicated company focused on delivering high-quality products and exceptional customer service. We specialize in providing reliable solutions tailored to meet the needs of our clients, combining professionalism, innovation, and attention to detail. Our mission is to create lasting value through excellence, integrity, and a commitment to customer satisfaction.',
    about:
      'we believe everyday care should feel simple, natural, and reliable. Our mission is to create high-quality products that support comfort, wellness, and confidence in your daily routine.',
  };
}
