import { ProfilePage } from '../profile-page/profile-page';
import { OutfitService } from '../../../outfit/services/outfit-service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../../../../shared/components/dialogs/dialog-show-outfit/dialog-show-outfit';
import { Outfit } from '../../../../shared/models/outfit';
import { ProfileOutfitCard } from "../../components/widgets/profile-outfit-card/profile-outfit-card";

@Component({
  selector: 'app-user-outfits',
  imports: [ProfileOutfitCard],
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
