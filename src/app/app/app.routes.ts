import { MainPage } from '../core/layouts/main-page/main-page';
import { Routes } from '@angular/router';
import { UnknownPage } from '../pages/unknown-page/unknown-page';
import { authGuard } from '../core/guards/auth.guard';
import { adminGuard } from '../core/guards/admin.guard';

export const routes: Routes = [
  {path: "auth", loadChildren: () => import('../modules/auth/auth-module').then(m => m.AuthModule)},
  {path: "", component: MainPage, children: [
    {path: "", redirectTo: "tape", pathMatch: "full"},
    {path: "tape", loadChildren: () => import('../modules/tape/tape-module').then(m => m.TapeModule)},
    {path: "ai-stylist", canActivate: [authGuard], loadChildren: () => import('../modules/ai-stylist/ai-stylist-module').then(m => m.AiStylistModule)},
    {path: "closet", canActivate: [authGuard], loadChildren: () => import('../modules/closet/closet-module').then(m => m.ClosetModule)},
    {path: "calendar", canActivate: [authGuard], loadChildren: () => import('../modules/calendar/calendar-module').then(m => m.CalendarModule)},
    {path: "profile/:profileId", loadChildren: () => import('../modules/profile/profile-module').then(m => m.ProfileModule)},
    {path: 'admin', canActivate: [authGuard, adminGuard], loadChildren: () => import('../modules/admin/admin-module').then(m => m.AdminModule)}
  ]},
  {path: "not-found", component: UnknownPage},
  {path: "**", redirectTo: "not-found"}
];
