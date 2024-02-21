import { Injectable } from '@angular/core';
import {Products} from "./models/Products";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteProducts: Products[] =[];

  constructor() { }


  addToFavorites(product: Products): void {
    if (!this.isFavorite(product)) {
      this.favoriteProducts.push(product);
    }
  }

  removeFromFavorites(product: Products): void {
    const index = this.favoriteProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.favoriteProducts.splice(index, 1);
    }
  }

  isFavorite(product: Products): boolean {
    return this.favoriteProducts.some(p => p.id === product.id);
  }

  getFavoriteProducts(): Products[] {
    return this.favoriteProducts;
  }

  getNumberOfFav(): number {
    return this.favoriteProducts.length;
  }
}
