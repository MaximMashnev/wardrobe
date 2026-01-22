import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { RegisterPage } from './components/register-page/register-page';
import { MainPage } from './components/main-page/main-page';
import { TapePage } from './components/tape-page/tape-page';
import { AiStylistPage } from './components/ai-stylist-page/ai-stylist-page';
import { ClosetPage } from './components/closet-page/closet-page';
import { CalendarPage } from './components/calendar-page/calendar-page';
import { ProfilePage } from './components/profile-page/profile-page';
import { MyStuffPage } from './components/my-stuff-page/my-stuff-page';
import { MyImagesPage } from './components/my-images-page/my-images-page';
import { UserOutfits } from './components/user-outfits/user-outfits';
import { UserLikes } from './components/user-likes/user-likes';
import { UnknownPage } from './components/unknown-page/unknown-page';
import { DialogShowOutfit } from './components/dialog-show-outfit/dialog-show-outfit';
import { DialogProfileSettings } from './components/dialog-profile-settings/dialog-profile-settings';

export const routes: Routes = [
  {path: "authorization", component: LoginPage},
  {path: "registration", component: RegisterPage},
  {path: "", component: MainPage, children:
    [
      {path: "", redirectTo: "tape", pathMatch: "full"},
      {path: "tape", component: TapePage},
      {path: "ai-stylist", component: AiStylistPage},
      {path: "closet", component: ClosetPage, children:
        [
          {path: "", redirectTo: "my-stuff", pathMatch: "full"},
          {path: "my-stuff", component: MyStuffPage},
          {path: "my-outfits", component: MyImagesPage}
        ]
      },
      {path: "calendar", component: CalendarPage},
      {path: "profile/:profileId", component: ProfilePage, children:
        [
          {path: "", redirectTo: "outfits", pathMatch: "full"},
          {path: "outfits", component: UserOutfits},
          {path: "likes", component: UserLikes}
        ]
      },
      {path: "outfit/:outfitId", component: DialogShowOutfit}
    ]
  },
  {path: "not-found", component: UnknownPage},
  {path: "**", redirectTo: "not-found"}
];
