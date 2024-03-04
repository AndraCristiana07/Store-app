import { Injectable } from '@angular/core';
import { Products } from './models/Products';
import { MockDataService } from './mock-data.service';
import { PRODUCT_BY_SEARCH_URL, PRODUCTS_URL } from './constants/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private http: HttpClient,
    private mockDataService: MockDataService,
  ) {}

  // getAll(): Products[] {
  //   return this.mockDataService.getProducts() as Products[];
  // }
  getAll(): Observable<Products[]> {
    return this.mockDataService.getProducts();
  }
  // getAllProdSearchTerm(searchTerm: string): Products[] {
  //   return this.getAll().filter(product =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  getAllProdSearchTerm(searchTerm: string) {
    return this.http.get<Products[]>(PRODUCT_BY_SEARCH_URL + searchTerm);
  }

  // constructor(private http:HttpClient) {}
  // getAll(): Observable<Products[]> {
  //   return this.http.get<Products[]>(PRODUCTS_URL);
  // }
  //
  // getAllProdSearchTerm(searchTerm: string): Observable<Products[]> {
  //   return this.http.get<Products[]>(PRODUCT_BY_SEARCH_URL + searchTerm);
  // }
}
