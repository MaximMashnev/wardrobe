import { ProfilePage } from './../profile-page/profile-page';
import { OutfitService } from './../../service/outfit-service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';
import { Outfit } from '../../models/outfit';
import { TuiLike, TuiAvatar,} from '@taiga-ui/kit';

@Component({
  selector: 'app-user-outfits',
  imports: [TuiLike],
  templateUrl: './user-outfits.html',
  styleUrl: './user-outfits.css',
})
export class UserOutfits implements OnInit{
  userOutfits!: Outfit[];

  constructor (
    public dialog: MatDialog,
    private OutfitService: OutfitService,
    private cdr: ChangeDetectorRef,
    private ProfilePage: ProfilePage,
  ) {}

  ngOnInit(): void {
    this.getPublishedOutfits();
  }

  openDialogShowOutfit(outfit: Outfit) {
    this.dialog.open(DialogShowOutfit, {
      data: [outfit, this.ProfilePage.user],
      maxWidth: '1080px',
    });
  }

  getPublishedOutfits() {
    this.OutfitService.getUserPublishedOutfits(this.ProfilePage.paramId).subscribe({
      next: (data) => {
        this.userOutfits = data;
        console.log(this.userOutfits);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
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
