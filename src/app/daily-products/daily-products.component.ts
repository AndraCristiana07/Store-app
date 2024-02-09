import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MockDataService} from "../mock-data.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {PrductCardComponent} from "../prduct-card/prduct-card.component";
@Component({
  selector: 'app-daily-products',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    CurrencyPipe,
    MatGridListModule,
    PrductCardComponent
  ],
  templateUrl: './daily-products.component.html',
  styleUrl: './daily-products.component.css'
})
export class DailyProductsComponent implements OnInit{
  public products: any;
  constructor(private _productService: MockDataService) {
  }
  ngOnInit():void {
    this.products = this._productService.getProducts();
  }
}
