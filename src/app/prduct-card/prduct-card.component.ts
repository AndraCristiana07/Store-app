import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MockDataService} from "../mock-data.service";
import { CartService } from "../cart.service";
import {CartItem} from "../models/CartItem";
import {FavoriteService} from "../favorite.service";
import {CommonModule} from "@angular/common";
import {Products} from "../models/Products";
import {Cart} from "../models/Cart";

@Component({
  selector: 'app-prduct-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    CurrencyPipe,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './prduct-card.component.html',
  styleUrl: './prduct-card.component.css'
})
export class PrductCardComponent implements OnInit{
  public products: any;
  // products: Products[] = [];
  buttonHoverState: { [key: string]: boolean } = {};
  buttonClickedState: { [key: string]: boolean } = {};
  constructor(private _productService: MockDataService, private cartService: CartService, private favoriteService: FavoriteService) {
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

  // onButtonClick(buttonType: string, productId: string): void {
  //   this.buttonClickedState[productId] = !this.buttonClickedState[productId];
  // }

  onButtonClick(buttonType: string, productId: string): void {
    // this.buttonClickedState[productId] = !this.buttonClickedState[productId];

    if (buttonType === 'heart') {
      this.toggleFavorite(this.products.find((product: any) => product.id === productId));
    // } else {
      this.buttonClickedState[productId] = !this.buttonClickedState[productId];
    }
  }

  // onButtonClick(buttonType: string, productId: string): void {
  //   if (buttonType === 'heart') {
  //     this.toggleFavorite(this.products.find((product: any) => product.id === productId));
  //   } else {
  //     this.buttonClickedState[productId] = !this.buttonClickedState[productId];
  //   }
  // }
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
    product.addedToCart = true;
  }

  // addToFav(product: any): void {
  //   let item = this.
  // }

  changeQuantity(productID: number, delta: number){
    this.cartService.changeQuantity(productID,delta);
  }


  getQuantity(productId: number): number {
    return this.cartService.getQuantity(productId);
  }

  // toggleFavorite(product: Products): void {
  //   product.favorite = !product.favorite;
  // }
  // isFavorite(product: Products): boolean {
  //   return product.favorite;
  // }

  toggleFavorite(product: Products): void {
    if (this.favoriteService.isFavorite(product)) {
      this.favoriteService.removeFromFavorites(product);
    } else {
      this.favoriteService.addToFavorites(product);
    }
  }

  isFavorite(product: Products): boolean {
    return this.favoriteService.isFavorite(product);
  }
  removeFromCart(cartItem:CartItem): void {
    this.cartService.removeFromCart(cartItem.products.id);
    // this.setCart();
  }
}
