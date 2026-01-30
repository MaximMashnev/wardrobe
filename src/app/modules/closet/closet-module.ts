import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClosetPage } from './pages/closet-page/closet-page';
import { MyStuffPage } from './pages/my-stuff-page/my-stuff-page';
import { MyOutfitPage } from './pages/my-outfit-page/my-outfit-page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: ClosetPage, children: [
        {path: "", redirectTo: "my-stuff", pathMatch: "full"},
        {path: "my-stuff", component: MyStuffPage},
        {path: "my-outfits", component: MyOutfitPage}
      ]}
    ])
  ]
})
export class ClosetModule { }
