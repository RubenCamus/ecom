import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-bar-mobile',
  templateUrl: 'navBarMobile.html',
  styleUrl: 'navBar.css',
  imports: [RouterLink],
})
export class NavBarMobile {
  openMobileDropdown() {
    document.getElementById('nav-dropdown')?.classList.add('show');
    document.getElementById('overlay')?.classList.add('show');
  }
  closeMobileDropdown() {
    document.getElementById('nav-dropdown')?.classList.remove('show');
    document.getElementById('overlay')?.classList.remove('show');
  }
}
