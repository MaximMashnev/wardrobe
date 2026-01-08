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

export const routes: Routes = [
  {path: "authorization", component: LoginPage},
  {path: "registration", component: RegisterPage},
  {path: "home", component: MainPage, children:
    [
      {path: "tape", component: TapePage},
      {path: "ai-stylist", component: AiStylistPage},
      {path: "closet", component: ClosetPage, children:
        [
          {path: "my-stuff", component: MyStuffPage},
          {path: "my-images", component: MyImagesPage}
        ]
      },
      {path: "calendar", component: CalendarPage},
      {path: "profile/:profileId", component: ProfilePage, children:
        [
          {path: "outfits", component: UserOutfits},
          {path: "likes", component: UserLikes}
        ]
      },
    ]
  },
  {path: "**", redirectTo: "home/tape"} //not found
];
