import { ChangeDetectorRef, Component, input, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProfile } from '../dialog-edit-profile/dialog-edit-profile';
import { User } from '../../models/user';
import { DialogProfileSettings } from '../dialog-profile-settings/dialog-profile-settings';
import { UserService } from './../../service/user-service';
import { publicUserInfo } from '../../models/publicUserInfo';

@Component({
  selector: 'app-profile-page',
  imports: [
    MatIconModule,
    TuiHint,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit {
  myProfile: boolean = false;
  userData!: publicUserInfo;
  myUserData!: User;
  user!: any;
  public paramId!: number;

  constructor (
    public dialog: MatDialog,
    private routes: ActivatedRoute,
    private UserService: UserService,
    private cdr: ChangeDetectorRef
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
        this.userData = data;
        // TODO убрать userData или user
        this.user = this.userData;
        this.cdr.detectChanges();
      },
      error: (Error) => {
        console.log(Error);
      }
    })
  }

  getMyProfileInfo() {
    this.UserService.getMe().subscribe({
      next: (data) => {
        this.myUserData = data;
        // TODO убрать myUserData или user
        this.user = this.myUserData;
        console.log(this.user);
        this.cdr.detectChanges();
      }
    })
  }

  openDialogSettings() {
    const dialogSettingsUser = this.dialog.open(DialogProfileSettings, {
      width: '400px',
      data: this.myUserData
    });
    dialogSettingsUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
        this.UserService.editProfile(result).subscribe({
          next(value) {
            console.log("editing setting success");
          },
        });
        this.cdr.detectChanges();
      };
    });
  }

  openDialogEditUser() {
    const dialogEditUser = this.dialog.open(DialogEditProfile, {
      width: '400px',
      data: this.myUserData
    });
    dialogEditUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
        this.UserService.editProfile(result).subscribe({
          next(value) {
            console.log("editing profile success");
          },
        });
        this.cdr.detectChanges();
      };
    });
  }

  logoutUser() {
    localStorage.clear();
  }

}
