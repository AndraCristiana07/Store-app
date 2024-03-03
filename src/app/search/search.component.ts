import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from "../search.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchTerm = '';

  constructor(private searchService: SearchService, activatesRoute: ActivatedRoute, private router: Router
  ) {
    activatesRoute.params.subscribe((params) => {
      if (params['searchTerm']) // Access searchTerm with bracket notation
        this.searchTerm = params['searchTerm'];
    });
  }

  @Output() searchResult = new EventEmitter<any[]>();

  onSearch(): void {
    // this.searchResult.emit(this.searchService.getAllProdSearchTerm(this.searchTerm));
  }

  ngOnInit() {
  }
}
