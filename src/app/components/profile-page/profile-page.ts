import { ChangeDetectorRef, Component, input, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProfile } from '../dialog-edit-profile/dialog-edit-profile';
import { User } from '../../models/user';
import { DialogProfileSettings } from '../dialog-profile-settings/dialog-profile-settings';
import { UserService } from './../../service/user-service';

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
  userData!: User;
  paramId!: number;

  constructor (
    public dialog: MatDialog,
    private routes: ActivatedRoute,
    private UserService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getParamsUrl();
    if (this.paramId == +localStorage.getItem('userId')!) {
      this.myProfile = true;
      this.getMyProfileInfo();
    }
    else {
      this.getProfileInfo();
      if (this.userData == undefined) {
        this.router.navigate(['/not-found']);
      }
    }
  }

  getParamsUrl() {
    this.routes.params.subscribe({
      next: (data) => {
        this.paramId = +data["profileId"];
      }
    });
  }

  getProfileInfo() {
    this.UserService.getUserInfo(this.paramId).subscribe({
      next: (data) => {
        this.userData = data;
        console.log(this.userData);
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
        this.userData = data;
        console.log(this.userData);
        this.cdr.detectChanges();
      }
    })
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

  logoutUser() {
    localStorage.clear();
  }

}
