import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private isBrowser: boolean
  constructor (
    @Inject(PLATFORM_ID)
    private platformId: any
  )
  {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  checkPasswordSignUp() {
    if (!this.isBrowser) {
      return console.log('Not Browser');
    }
    var psw = document.querySelector('#psw');
    console.log('password is', psw);
    return psw;
    // var pswRepeat = document.querySelector('#psw-repeat');
    // console.log('password Repeat is', pswRepeat);
  }
}
