import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet, RouterLinkActive, ActivatedRoute, RouterLinkWithHref, Router} from '@angular/router';
import { UserService } from '../../../../shared/services/user-service';
import { publicUserInfo } from '../../../../shared/models/publicUserInfo';
import { ProfileCardWidget } from "../../components/widgets/profile-card-widget/profile-card-widget";

@Component({
  selector: 'app-profile-page',
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
    ProfileCardWidget
],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit{

  public isMyProfile: boolean = false;
  public user: publicUserInfo | null = null;
  public paramId!: number;

  constructor (
    private routes: ActivatedRoute,
    private UserService: UserService,
    private readonly cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.paramId = params['profileId'];
      this.getProfileInfo();
      this.cdr.detectChanges();
    });
    if (this.paramId == +localStorage.getItem('userId')!) {
      this.isMyProfile = true;
    }
  }

  getProfileInfo() {
    this.UserService.getUserInfo(this.paramId).subscribe({
      next: (data) => {
        this.user = data;
        this.cdr.detectChanges();
      },
      error: (Error) => {
        console.log(Error);
        this.router.navigate(['/not-found']);
      }
    })
  }
}
