import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: 'footerApp.html',
  styleUrl: './footerApp.css',
})
export class FooterApp {
  twitter = 'placeholder';
  storesMenu = true;
  showMobileStores() {
    document.getElementById('stores-wrapper')?.classList.toggle('show');
    document.getElementById('info')?.classList.toggle('hide');
  }
}
