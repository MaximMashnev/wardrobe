import { OutfitService } from '../../../outfit/services/outfit-service';
import { ProfilePage } from '../profile-page/profile-page';
import { Component, OnInit } from '@angular/core';
import { Outfit } from '../../../../shared/models/outfit';
import { ProfileOutfitCard } from "../../components/widgets/profile-outfit-card/profile-outfit-card";
import { catchError, map} from 'rxjs';

@Component({
  selector: 'app-user-likes',
  imports: [ProfileOutfitCard],
  templateUrl: './user-likes.html',
  styleUrl: './user-likes.css',
})
export class UserLikes implements OnInit {

  likesOutfits: Outfit[] | undefined;
  myProfileId: number = +localStorage.getItem("userId")!;

  constructor (
    public ProfilePage: ProfilePage,
    public OutfitService: OutfitService,
  ) {}

  ngOnInit(): void {
    this.getUserLikes();
  }

  getUserLikes() {
    this.OutfitService.getLikedOutfits(
      Object.values(this.ProfilePage.user!.likeIt).reduce((url, id) => url + `id=${id}&`, "")
    ).pipe(
      map(
        (data) => this.likesOutfits = data
      ),
      catchError(
        async (err) => console.log(err)
      )
    )
  }
}
