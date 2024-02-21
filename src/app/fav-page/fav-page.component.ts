import {Component, OnInit} from '@angular/core';
import {PrductCardComponent} from "../prduct-card/prduct-card.component";
import {Cart} from "../models/Cart";
import {Products} from "../models/Products";
import {MockDataService} from "../mock-data.service";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CartService} from "../cart.service";
import {PrductCartComponent} from "../prduct-cart/prduct-cart.component";
import {FavoriteService} from "../favorite.service";
import {CartItem} from "../models/CartItem";
import {EmptyCartDialogComponent} from "../empty-cart-dialog/empty-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {RemoveFavoriteDialogComponent} from "../remove-fav-dialog/remove-fav-dialog.component";
@Component({
  selector: 'app-fav-page',
  standalone: true,
  imports: [
    PrductCardComponent,
    CurrencyPipe,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridList,
    MatGridTile,
    HeaderComponent,
    RouterLink,
    CommonModule,
    PrductCartComponent

  ],
  templateUrl: './fav-page.component.html',
  styleUrl: './fav-page.component.css'
})
export class FavPageComponent  implements OnInit {
  favoriteProducts: Products[] = [];
  public products: any;

  constructor(private favoriteService: FavoriteService, private _productService: MockDataService, private cartService: CartService, public dialog: MatDialog) {
  }

  // ngOnInit():void {
  //   this.products = this._productService.getProducts();
  // }
  ngOnInit(): void {
    this.favoriteProducts = this.favoriteService.getFavoriteProducts();
  }


  openDialog(item : Products): void {
    const dialogRef = this.dialog.open(RemoveFavoriteDialogComponent, {
      data: { item: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.removeItem(item.products.id);
    });
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    product.addedToCart = true;
  }

  changeQuantity(productID: number, delta: number){
    this.cartService.changeQuantity(productID,delta);
  }

  getQuantity(productId: number): number {
    return this.cartService.getQuantity(productId);
  }

  getNumberOfFav(): number {
    return this.favoriteService.getNumberOfFav();
  }

}
