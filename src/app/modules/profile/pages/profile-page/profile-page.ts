import { Auth } from './../../../auth/services/auth';
import { Component, OnInit} from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, ActivatedRoute} from '@angular/router';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user-service';
import { publicUserInfo } from '../../../../shared/models/publicUserInfo';
import { ProfileCardWidget } from "../../components/widgets/profile-card-widget/profile-card-widget";

@Component({
  selector: 'app-profile-page',
  imports: [
    MatIconModule,
    TuiHint,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
    ProfileCardWidget
],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit{
  myProfile: boolean = false;
  user!: publicUserInfo | User | null;
  public paramId!: number;

  constructor (
    private routes: ActivatedRoute,
    private UserService: UserService,
    private Auth: Auth
  ) {
    // TODO исправить ошибку: при переходе на профиль юзера 2 и последующем клике на кнопку профиль на навигации перезагрузки страницы не происходит.
    this.routes.params.subscribe(params => this.paramId = params['profileId']);
  }

  ngOnInit(): void {
    if (this.paramId == +localStorage.getItem('userId')!) {
      this.myProfile = true;
      this.getMyProfileInfo();
    }
    else {
      this.getProfileInfo();
      if (this.user == undefined) {
        // this.router.navigate(['/not-found']);
        console.log(this.user);
      }
    }
  }

  getProfileInfo() {
    this.UserService.getUserInfo(this.paramId).subscribe({
      next: (data) => {
        this.user = data
      },
      error: (Error) => {
        console.log(Error);
      }
    })
  }

  getMyProfileInfo() {
    this.user = this.Auth.getUser();
  }
}
