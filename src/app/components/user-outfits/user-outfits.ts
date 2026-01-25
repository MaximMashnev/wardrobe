import { ProfilePage } from './../profile-page/profile-page';
import { OutfitService } from './../../service/outfit-service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';
import { Outfit } from '../../models/outfit';

@Component({
  selector: 'app-user-outfits',
  imports: [],
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

  openDialogShowOutfit(id: number) {
    this.dialog.open(DialogShowOutfit, {
      data: id,
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
}
