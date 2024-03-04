import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";

import { RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(
    private searchService: SearchService,
    activatesRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.searchTerm);
    console.log(this.search)
  }


  ngOnInit() {}
}
