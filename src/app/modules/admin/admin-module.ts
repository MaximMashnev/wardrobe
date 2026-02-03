import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PremoderationPage } from './pages/premoderation-page/premoderation-page';
import { OutfitsPage } from './pages/outfits-page/outfits-page';
import { StuffsPage } from './pages/stuffs-page/stuffs-page';
import { UsersPage } from './pages/users-page/users-page';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "pre-moderation", component: PremoderationPage},
      {path: "outfits", component: OutfitsPage},
      {path: "stuffs", component: StuffsPage},
      {path: "users", component: UsersPage},
    ]),
  ]
})
export class AdminModule { }
