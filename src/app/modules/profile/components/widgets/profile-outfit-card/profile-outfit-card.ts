import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../../../../../shared/components/dialogs/dialog-show-outfit/dialog-show-outfit';
import { Outfit } from './../../../../../shared/models/outfit';
import { Component, Input } from '@angular/core';
import { ProfilePage } from '../../../pages/profile-page/profile-page';
import { LikeWidget } from "../../../../../shared/components/widgets/like-widget/like-widget";

@Component({
  selector: 'profile-outfit-card',
  imports: [LikeWidget],
  templateUrl: './profile-outfit-card.html',
  styleUrl: './profile-outfit-card.css',
})
export class ProfileOutfitCard {
  @Input()
  outfit!: Outfit;

  constructor(
    public dialog: MatDialog,
    public ProfilePage: ProfilePage,
  ) {}

  openDialogShowOutfit(outfit: Outfit, ProfilePage: ProfilePage) {
    this.dialog.open(DialogShowOutfit, {
      data: [outfit, ProfilePage.user],
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
