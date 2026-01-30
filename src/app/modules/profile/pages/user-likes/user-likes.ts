import { OutfitService } from '../../../outfit/services/outfit-service';
import { ProfilePage } from '../profile-page/profile-page';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Outfit } from '../../../../shared/models/outfit';
import { ProfileOutfitCard } from "../../components/widgets/profile-outfit-card/profile-outfit-card";

@Component({
  selector: 'app-user-likes',
  imports: [ProfileOutfitCard],
  templateUrl: './user-likes.html',
  styleUrl: './user-likes.css',
})
export class UserLikes implements OnInit{

  likesOutfits!: Outfit[];
  myProfileId: number = +localStorage.getItem("userId")!;

  constructor (
    public dialog: MatDialog,
    public ProfilePage: ProfilePage,
    public OutfitService: OutfitService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getUserLikes();
  }

  getUserLikes() {
    let urlLikes = "";
    Object.values(this.ProfilePage.user.likeIt).map(value => urlLikes += "id=" + value + "&")
    this.OutfitService.getLikedOutfits(urlLikes).subscribe({
      next: (data) => {
        this.likesOutfits = data;
        this.cdr.detectChanges();
      },
      error(err) {
          console.log(err);
      },
    })
  }
}
