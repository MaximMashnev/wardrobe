import { ProfileService } from './../../../services/profile-service';
import { User } from './../../../../../shared/models/user';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { RouterLinkWithHref } from '@angular/router';
import { DialogProfileSettings } from '../../dialogs/dialog-profile-settings/dialog-profile-settings';
import { DialogEditProfile } from '../../dialogs/dialog-edit-profile/dialog-edit-profile';
import { publicUserInfo } from '../../../../../shared/models/publicUserInfo';

@Component({
  selector: 'profile-card-widget',
  imports: [
    MatIconModule,
    RouterLinkWithHref
  ],
  templateUrl: './profile-card-widget.html',
  styleUrl: './profile-card-widget.css',
})
export class ProfileCardWidget {

  @Input()
  myProfile: boolean = false;

  @Input()
  user!: publicUserInfo | User | null;

  constructor (
    public dialog: MatDialog,
    private ProfileService: ProfileService
  ) {}


  openDialogSettings() {
    const dialogSettingsUser = this.dialog.open(DialogProfileSettings, {
      width: '400px',
      data: this.user
    });
    dialogSettingsUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
        this.ProfileService.editProfile(result).subscribe({
          next(value) {
            console.log("editing setting success");
          },
        });
      };
    });
  }

  openDialogEditUser() {
    const dialogEditUser = this.dialog.open(DialogEditProfile, {
      width: '400px',
      data: this.user
    });
    dialogEditUser.afterClosed().subscribe((result: User) => {
      if (result != null) {
        this.ProfileService.editProfile(result).subscribe({
          next(value) {
            console.log("editing profile success");
          },
        });
      };
    });
  }

  logoutUser() {
    localStorage.clear();
  }
}
