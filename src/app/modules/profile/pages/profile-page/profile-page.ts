import { ChangeDetectorRef, Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
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
export class ProfilePage implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change");
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
}
