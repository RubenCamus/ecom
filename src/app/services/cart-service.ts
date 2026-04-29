import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  getCart() {
    if((this.isBrowser)) {
      var cart = localStorage.getItem('cart');
      return cart;
    }
    return;
  }
  getProduct(id: number) { 
    var cart = this.parseCart();
    for (let x = 0; x < cart.length; x++) {
      if (cart[x].id === id) {
        return (cart[x]);
      }
    }
    return "Product not found";
  }

  parseCart() { 
    var cart = this.getCart()
    if (cart == null) {
      console.log('Cart is empty')
      return [];
    } 
    var cartObject = JSON.parse(cart);
    return cartObject;
  }


  addToCart(product: any) {
    var cart = this.parseCart();
    if (cart == null || cart == undefined || cart.length == 0) {
      product.quantity = 1;
      localStorage.setItem('cart', JSON.stringify([product]));
      return;
    }
    // IF product exists in cart, we add 1 to the quantity property
    for (let x = 0; x < cart.length; x++) {
      if (product.id == cart[x].id)  {
        cart[x].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart))
        return;
      }    
    }
    // IF product does not exists, we push into the array of products the new one.
    cart.push(product);
    var cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
    console.log(localStorage.getItem('cart'));
  }
  removeProduct(product: any) { 
    var cart = this.parseCart();
    if (cart == null || cart == undefined) {
      return 'Cart empty';
    }
    for (let x = 0; x < cart.length; x++) {
      if (product.id == cart[x].id)  {
        if (cart[x].quantity > 0 )  {
          cart[x].quantity -= 1;
          if (cart[x].quantity == 0) {
            cart.splice(x, 1);
          }
          localStorage.setItem('cart', JSON.stringify(cart))
          return;
        }
        else {
          return console.log('No product in cart');
        }
      }    
    }
    return 'Product not in cart';
  }
}
