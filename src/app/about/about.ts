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
                At <strong>{{business.name}}</strong> {{business.about}}
            </p>
        </div>
    </div>
    `,
    styleUrl: 'about.css',
})

export class About {
  business: any = 
    {
        name: 'Velore Essentials',
        description: "is a dedicated company focused on delivering high-quality products and exceptional customer service. We specialize in providing reliable solutions tailored to meet the needs of our clients, combining professionalism, innovation, and attention to detail. Our mission is to create lasting value through excellence, integrity, and a commitment to customer satisfaction.",
        about: 'we believe everyday care should feel simple, natural, and reliable. Our mission is to create high-quality products that support comfort, wellness, and confidence in your daily routine.'
    }

}