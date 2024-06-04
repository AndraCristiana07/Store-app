import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  // search = '';
  constructor(
    private searchService: SearchService,
    activatesRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {
    // route.paramMap.subscribe(params => {
    //   const term = params.get('term');
    //   if(term)
    //     this.searchService.searchProducts(term).subscribe(
    //       (results) => {
    //         this.searchResults = results;
    //       },
    //       (error) => {
    //         console.error('Error searching products:', error);
    //       }
    //     );
    // });
  }

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.searchTerm);
    // this.search = this.searchTerm;
    console.log(this.search);
  }

  ngOnInit() {}
}
