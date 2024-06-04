import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
import { DailyProductsComponent } from './daily-products/daily-products.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TypesComponent } from './types/types.component';
import { MockDataService } from './mock-data.service';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
  { path: 'search/:searchTerm', component: SearchPageComponent },
  { path: '', component: HomeComponent },
  // {path: ''}
  { path: 'types/:type', component: TypesComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'favorites', component: FavPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'delivery', component: DeliveryPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    DailyProductsComponent,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [RouterModule],
  providers: [provideHttpClient(), MockDataService, SearchService],
})
export class AppRoutingModule {}
