import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { HeaderComponent } from '../header/header.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CartService } from '../cart.service';
import { Products } from '../models/Products';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  searchResults: any[''];
  buttonHoverState: { [key: string]: boolean } = {};
  buttonClickedState: { [key: string]: boolean } = {};
  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService,
    private searchService: SearchService,
    private cartService: CartService,
  ) {
    route.paramMap.subscribe((params) => {
      const term = params.get('searchTerm');
      console.log(params);
      if (term)
        this.searchService.searchProducts(term).subscribe(
          (results) => {
            this.searchResults = results;
          },
          (error) => {
            console.error('Error searching products:', error);
          },
        );
    });
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const term = params.get('term');
  //     if(term)
  //     this.searchService.searchProducts(term).subscribe(
  //       (results) => {
  //         this.searchResults = results;
  //       },
  //       (error) => {
  //         console.error('Error searching products:', error);
  //       }
  //     );
  //   });
  // }

  onSearch(term: string): void {
    this.searchService.searchProducts(term).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error searching products:', error);
      },
    );
  }

  changeQuantity(productID: number, delta: number) {
    this.cartService.changeQuantity(productID, delta);
  }

  getQuantity(productId: number): number {
    return this.cartService.getQuantity(productId);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    product.addedToCart = true;
  }

  onButtonHover(buttonType: string, productId: number): void {
    this.buttonHoverState[productId] = true;
  }

  onButtonOut(buttonType: string, productId: number): void {
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
