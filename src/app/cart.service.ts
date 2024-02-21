import { Injectable } from '@angular/core';
import {Cart} from "./models/Cart";
import {Products} from "./models/Products";
import { CartItem } from './models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {}

 addToCart(products: Products): void {
   let cartItem = this.cart.items.find(item => item.products.id === products.id);
   if (cartItem) {
     this.changeQuantity(products.id, 1);
   } else {
     products.addedToCart = true;
     this.cart.items.push(new CartItem(products));
   }
 }

 removeFromCart(productID: number): void {
  this.cart.items.filter(item => item.products.id !== productID);
 }
  removeItem(productId: number): void {
    const index = this.cart.items.findIndex(item => item.products.id === productId);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }


 changeQuantity(productID: number, delta: number): void {
  let cartItem = this.cart.items.find(item => item.products.id === productID);
  if (cartItem) {
    cartItem.quantity += delta;
    if (cartItem.quantity < 0) {
      cartItem.quantity = 0;
    }
    if(cartItem.quantity == 0){
      this.removeItem(productID)
    }
  }
 }

  getCartTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart.items) {
      totalPrice += item.quantity * item.products.price;
    }
    return totalPrice;
  }

  getDeliveryFee(): number {
    const totalPrice = this.getCartTotalPrice();
    if(totalPrice < 50){
      return 10;
    }
    else {
      return 0;
    }
  }

  getTotalPrice(): number {
    return this.getCartTotalPrice() + this.getDeliveryFee() + 2;

  }

 getCart(): Cart {
  return this.cart;
 }

  getNumberOfItems(): number {
    let total = 0;
    for (const item of this.cart.items) {
      total += item.quantity;
    }
    return total;
  }
  emptyCart(): void {
    this.cart.items = [];
  }

  getQuantity(productId: number): number {
    const cartItem = this.cart.items.find(item => item.products.id === productId);
    return cartItem ? cartItem.quantity : 0;
  }
}
