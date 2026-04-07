import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  getCart() { 
    var cart = localStorage.getItem('cart');
    return cart;
  }
  getProduct(id: number) { 
    var cart = this.parseCart();
    for (let x = 0; x < cart.length; x++) {
      console.log(cart[x]);
      if (cart[x].id === id) {
        return (cart[x].name);
      }
    }
    return "Product not found";
  }
  increaseProduct(product: object) {
    var cartArr = this.parseCart(); // get cart array
    
  }

  parseCart() { 
    var cart = this.getCart()
    if (cart == null) {
      console.log('Cart is empty')
      return;
    } 
    var cartObject = JSON.parse(cart);
    return cartObject;
  }

  addToCart(product: object) {
    var cart = this.parseCart();
    if (cart == null || cart == undefined) {
      localStorage.setItem('cart', JSON.stringify([product]));
      return;
    }
    cart.push(product);
    var cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
    console.log(localStorage.getItem('cart'));
  }

}
