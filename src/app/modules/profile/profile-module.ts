import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';
import { UserOutfits } from './pages/user-outfits/user-outfits';
import { UserLikes } from './pages/user-likes/user-likes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: ProfilePage, children: [
        {path: "", redirectTo: "outfits", pathMatch: "full"},
        {path: "outfits", component: UserOutfits},
        {path: "likes", component: UserLikes}
      ]}
    ])
  ]
})
export class ProfileModule { }
