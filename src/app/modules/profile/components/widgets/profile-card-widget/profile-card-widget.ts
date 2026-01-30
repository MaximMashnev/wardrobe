import { User } from './../../../../../shared/models/user';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { RouterLinkWithHref } from '@angular/router';
import { UserService } from '../../../../../shared/services/user-service';
import { DialogProfileSettings } from '../../dialogs/dialog-profile-settings/dialog-profile-settings';
import { DialogEditProfile } from '../../dialogs/dialog-edit-profile/dialog-edit-profile';

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
  user!: any;

  constructor (
    public dialog: MatDialog,
    private UserService: UserService,
    private cdr: ChangeDetectorRef,
  ) {

  }


  openDialogSettings() {
    const dialogSettingsUser = this.dialog.open(DialogProfileSettings, {
      width: '400px',
      data: this.user
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
      data: this.user
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
