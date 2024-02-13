import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MockDataService} from "../mock-data.service";
import { CartService } from "../cart.service";
import {CartItem} from "../models/CartItem";


@Component({
  selector: 'app-prduct-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    CurrencyPipe,
    MatGridListModule
  ],
  templateUrl: './prduct-card.component.html',
  styleUrl: './prduct-card.component.css'
})
export class PrductCardComponent implements OnInit{
  public products: any;
  buttonHoverState: { [key: string]: boolean } = {};
  buttonClickedState: { [key: string]: boolean } = {};
  constructor(private _productService: MockDataService, private cartService: CartService) {
  }
  ngOnInit():void {
    this.products = this._productService.getProducts();
  }

  onButtonHover(buttonType: string, productId: string): void {
    this.buttonHoverState[productId] = true;
  }

  onButtonOut(buttonType: string, productId: string): void {
    this.buttonHoverState[productId] = false;
  }

  onButtonClick(buttonType: string, productId: string): void {
    this.buttonClickedState[productId] = !this.buttonClickedState[productId];
  }

  getHeartImage(productId: string): string {
    if (this.buttonClickedState[productId]) {
      return 'assets/red-heart-icon.svg';
    } else if (this.buttonHoverState[productId]) {
      return 'assets/red-heart-icon.svg';
    } else {
      return 'assets/heart.svg';
    }
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(cartItem:CartItem): void {
    this.cartService.removeFromCart(cartItem.products.id);
    // this.setCart();
  }
}
