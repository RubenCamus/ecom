import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'logo',
  template: `<a routerLink=""
    ><img class="logo-image" ngSrc="../../favicon.ico" width="100" height="50" alt="logo"
  /></a>`,
  imports: [NgOptimizedImage, RouterLink],
  styles: `
    .logo-image {
    }
  `,
})
export class Logo {}
