import { ProfilePage } from '../profile-page/profile-page';
import { OutfitService } from '../../../outfit/services/outfit-service';
import { Component, OnInit} from '@angular/core';
import { Outfit } from '../../../../shared/models/outfit';
import { ProfileOutfitCard } from "../../components/widgets/profile-outfit-card/profile-outfit-card";

@Component({
  selector: 'app-user-outfits',
  imports: [ProfileOutfitCard],
  templateUrl: './user-outfits.html',
  styleUrl: './user-outfits.css',
})
export class UserOutfits implements OnInit {
  userOutfits: Outfit[] | undefined;

  constructor (
    private OutfitService: OutfitService,
    private ProfilePage: ProfilePage,
  ) {}

  ngOnInit(): void {
    this.getPublishedOutfits();
  }

  getPublishedOutfits() {
    this.OutfitService.getUserPublishedOutfits(this.ProfilePage.paramId).subscribe({
      next: (data) => {
        this.userOutfits = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
