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
    RouterLinkWithHref
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {
  isAuthorized: boolean = true;
  myUrl = 'profile/' + localStorage.getItem('userId');

  constructor (
    private router: Router,
  ) {
    this.checkAuth();
  }

  checkAuth() {
    if (!localStorage.getItem("Bearer")) {
      this.isAuthorized = false;
    }
    else {
      this.isAuthorized = true;
    }
  }
}
