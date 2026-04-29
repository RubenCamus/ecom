import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID)
    private platformId: any
  ) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
