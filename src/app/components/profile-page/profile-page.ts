import { Component, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProfile } from '../dialog-edit-profile/dialog-edit-profile';
import { User } from '../../models/user';
import { DialogProfileSettings } from '../dialog-profile-settings/dialog-profile-settings';

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
export class ProfilePage {
  myProfile: boolean = false;
  profileId = input.required<string>();
  userData!: any;

  constructor (
    public dialog: MatDialog,
  ) {

  }

  getProfileInfo(Id: any) {
    const profilesInfo = [
      {
        id: 1,
        username: 'UserName_1',
        imageProfile: 'https://i.pinimg.com/736x/5f/04/09/5f0409e4db4e898c99b925ca951ae201.jpg',
        gender: 'Женский',
        height: 10,
        weight: 10,
        shoeSize: '42',
        clothingSize: 'M',
        otherInfo: 'Привет, Мир!',
        subscriptions: 10,
        likes: 10,
        subscribers: 20
      },
      {
        id: 2,
        username: 'UserName_2',
        imageProfile: 'https://i.pinimg.com/736x/5f/04/09/5f0409e4db4e898c99b925ca951ae201.jpg',
        gender: 'Мужской',
        height: 20,
        weight: 20,
        shoeSize: '52',
        clothingSize: 'M',
        otherInfo: 'Привет, Мир2!',
        subscriptions: 20,
        likes: 20,
        subscribers: 20
      },
    ]

    if (Id == 0) this.myProfile = true;
    return profilesInfo[Id];
  }

  openDialogSettings() {
    const dialogSettingsUser = this.dialog.open(DialogProfileSettings, {
      width: '400px',
      data: this.userData
    });
    dialogSettingsUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
          console.log(result);
      };
    });
  }

  openDialogEditUser() {
    const dialogEditUser = this.dialog.open(DialogEditProfile, {
      width: '400px',
      data: this.userData
    });
    dialogEditUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
          console.log(result);
      };
    });
  }
}
