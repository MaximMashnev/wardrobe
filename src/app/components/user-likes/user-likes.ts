import { OutfitService } from './../../service/outfit-service';
import { ProfilePage } from './../profile-page/profile-page';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';
import { Outfit } from '../../models/outfit';
import { TuiLike, TuiAvatar,} from '@taiga-ui/kit';

@Component({
  selector: 'app-user-likes',
  imports: [TuiLike],
  templateUrl: './user-likes.html',
  styleUrl: './user-likes.css',
})
export class UserLikes implements OnInit{

  likesOutfits!: Outfit[];

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

  openDialogShowOutfit(outfit: Outfit) {
    this.dialog.open(DialogShowOutfit, {
      data: [outfit, this.ProfilePage.user],
      maxWidth: '1080px',
    });
  }

  definitionLikes(numLikes: number) {
    let length = (numLikes.toString().length);
    let str = (numLikes / (length > 6 ? 1e6 : 1e3) ).toString();

    if (length < 4) return numLikes;
    if (str[3] == '.') {
      return str.slice(0, 3) + (length > 6 ? "m": "k");
    }
    else {
      return str.slice(0, 4) + (length > 6 ? "m": "k");
    }
  }
}
