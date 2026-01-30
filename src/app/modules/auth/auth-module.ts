import { ClosetPage } from './../closet/pages/closet-page/closet-page';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', children: [
        {path: "", redirectTo: "authorization", pathMatch: "full"},
        {path: "authorization", component: LoginPage},
        {path: "registration", component: RegisterPage}
      ]}
    ])
  ]
})
export class AuthModule { }
