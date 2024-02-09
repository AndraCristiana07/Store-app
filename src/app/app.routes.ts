import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {FavPageComponent} from "./fav-page/fav-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from "./login/login.component";
import {DeliveryPageComponent} from "./delivery-page/delivery-page.component";
import {DailyProductsComponent} from "./daily-products/daily-products.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'favorites', component: FavPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'delivery', component: DeliveryPageComponent },

];


@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes), DailyProductsComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
