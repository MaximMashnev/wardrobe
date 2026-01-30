import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-closet-page',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  templateUrl: './closet-page.html',
  styleUrl: './closet-page.css',
})
export class ClosetPage {

}
