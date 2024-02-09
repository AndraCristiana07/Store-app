import { Component } from '@angular/core';
import {PrductCardComponent} from "../prduct-card/prduct-card.component";

@Component({
  selector: 'app-fav-page',
  standalone: true,
  imports: [
    PrductCardComponent
  ],
  templateUrl: './fav-page.component.html',
  styleUrl: './fav-page.component.css'
})
export class FavPageComponent {

}
