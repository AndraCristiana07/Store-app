import { Component, OnInit, Type } from '@angular/core';
import { ProductCardComponent } from '../prduct-card/prduct-card.component';
import { Cart } from '../models/Cart';
import { Products } from '../models/Products';
import { MockDataService } from '../mock-data.service';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { PrductCartComponent } from '../prduct-cart/prduct-cart.component';
import { FavoriteService } from '../favorite.service';
import { CartItem } from '../models/CartItem';
import { EmptyCartDialogComponent } from '../empty-cart-dialog/empty-cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavoriteDialogComponent } from '../remove-fav-dialog/remove-fav-dialog.component';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CategoryBarComponent } from '../category-bar/category-bar.component';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [
    ProductCardComponent,
    CurrencyPipe,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridList,
    MatGridTile,
    HeaderComponent,
    RouterLink,
    CommonModule,
    PrductCartComponent,
    CategoryBarComponent,
  ],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css',
})
export class TypesComponent {
  constructor(
    private _productService: MockDataService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private cartService: CartService,
    public dialog: MatDialog,
  ) {
    route.params.subscribe((type) => {
      // console.log(typeof type);
      _productService.getProductsByType(type['type']).subscribe((selected) => {
        // console.log(selected);

        this.products = selected;
      });
    });
  }
  public products: any;
  public types: any;
  selectedType: string = '';
  buttonHoverState: { [key: string]: boolean } = {};
  buttonClickedState: { [key: string]: boolean } = {};
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.selectedType = params['type'];
    //   this.loadProducts();
    // });
  }

  // loadProducts(): void {
  //   this.products = this._productService.getProducts();
  //   this.types = this._productService.getProductTypes();
  // }
  loadProducts(): void {
    this.products = this._productService.getProductsByType(this.selectedType);
  }

  openDialog(item: Products): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      // data: { item: item }
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
      // this.removeItem(item.products.id);
    });
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    product.addedToCart = true;
  }

  changeQuantity(productID: number, delta: number) {
    this.cartService.changeQuantity(productID, delta);
  }

  getQuantity(productId: number): number {
    return this.cartService.getQuantity(productId);
  }

  onButtonHover(buttonType: string, productId: string): void {
    this.buttonHoverState[productId] = true;
  }

  onButtonOut(buttonType: string, productId: string): void {
    this.buttonHoverState[productId] = false;
  }

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
}
