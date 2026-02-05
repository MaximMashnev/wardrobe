import { OutfitService } from '../../../outfit/services/outfit-service';
import { ProfilePage } from '../profile-page/profile-page';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Outfit } from '../../../../shared/models/outfit';
import { ProfileOutfitCard } from "../../components/widgets/profile-outfit-card/profile-outfit-card";

@Component({
  selector: 'app-user-likes',
  imports: [ProfileOutfitCard],
  templateUrl: './user-likes.html',
  styleUrl: './user-likes.css',
})
export class UserLikes implements OnInit {

  likesOutfits: Outfit[] | undefined;

  constructor (
    public ProfilePage: ProfilePage,
    private OutfitService: OutfitService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getUserLikes();
  }

  getUserLikes() {
    this.OutfitService.getLikedOutfits(
      Object.values(this.ProfilePage.user?.likeIt ?? []).reduce((url, id) => url + `id=${id}&`, "")
    ).subscribe({
      next: (data) => {
        this.likesOutfits = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
