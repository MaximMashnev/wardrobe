import { Auth } from './../../../modules/auth/services/auth';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {
  isAuthorized: boolean = false;
  isAdmin: boolean = false;
  userId? = localStorage.getItem('userId');

  constructor (
    private router: Router,
    public Auth: Auth
  ) {
    this.checkAuth();
  }

  checkAuth() {
    if (!localStorage.getItem("Bearer")) {
      this.isAuthorized = false;
    }
    else {
      this.isAuthorized = true;
      this.checkAdmin();
    }
  }

  checkAdmin() {
    // this.isAdmin = (this.Auth.getUser()?.role == "admin") ? true : false;
    if (localStorage.getItem("role") == "admin") {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  }
}
