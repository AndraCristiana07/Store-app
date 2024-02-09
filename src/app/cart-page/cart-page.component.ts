import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {PrductCartComponent} from "../prduct-cart/prduct-cart.component";
import {CartService} from "../cart.service";
import {OnInit} from "@angular/core";
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';


@Component({
  selector: 'app-cart-page',
  // standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    PrductCartComponent
  ],
  templateUrl: './cart-page.component.html',
  standalone: true,
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  // cartItems: any[] = [];
  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem): void {
    this.cartService.removeFromCart(cartItem.products.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.products.id, quantity);
    this.setCart();
  }
}
