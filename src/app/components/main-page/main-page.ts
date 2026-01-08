import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

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
  myProfileId = 0;
  myUrl = 'profile/' + this.myProfileId
}
