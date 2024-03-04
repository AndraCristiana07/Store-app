import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock-data.service';
import { Type } from '../models/Type';
import { RouterLink } from '@angular/router'; // Correct import statement
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css'],
})
export class CategoryBarComponent implements OnInit {
  types?: string[];

  constructor(private mockDataService: MockDataService) {
    mockDataService.getProductTypes().subscribe((serverTypes) => {
      this.types = serverTypes;
      console.log(this.types);
    });
  }

  ngOnInit() {
    // this.types = this.mockDataService.getProductTypes();
  }
}
