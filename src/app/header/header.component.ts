import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, SearchComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.isLoggedIn = localStorage.getItem('token') !== null;
  }
  search(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.router.navigate(['/search', searchTerm.trim()]);
    }
  }
  openLogoutConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.logout();
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
  ngOnInit() {}

  handleLogin() {
    this.isLoggedIn = true;
  }
}
