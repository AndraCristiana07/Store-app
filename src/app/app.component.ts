import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    CommonModule,
    CartPageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  styleUrls: ['./app.component.css'],
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  title = 'routing-app';
}
