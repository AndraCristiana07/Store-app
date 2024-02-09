import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
