import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {CategoryBarComponent} from "../category-bar/category-bar.component";
import {DailyProductsComponent} from "../daily-products/daily-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CategoryBarComponent, DailyProductsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
