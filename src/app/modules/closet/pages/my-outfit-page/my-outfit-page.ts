import { OutfitService } from '../../../outfit/services/outfit-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { DialogAddEditOutfit } from '../../../outfit/components/dialogs/dialog-add-edit-outfit/dialog-add-edit-outfit';
import { Outfit } from '../../../../shared/models/outfit';

@Component({
  selector: 'app-my-outfit-page',
  imports: [
    MatIconModule,
    TuiHint,
  ],
  templateUrl: './my-outfit-page.html',
  styleUrl: './my-outfit-page.css',
})
export class MyOutfitPage implements OnInit {

  outfits!: Outfit[];

  constructor (
    private cdr: ChangeDetectorRef,
    private OutfitService: OutfitService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getMyOutfits();
  }

  openDialogAddOutfit() {
    const dialogAddOutfit = this.dialog.open(DialogAddEditOutfit, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: null
    });
    dialogAddOutfit.afterClosed().subscribe((result: Outfit) => {
      if (result != null && result != undefined) {
        console.log(result);
        this.getMyOutfits();
      };
    });
  }

  openDialogEditOutfit(outfit: Outfit) {
    const dialogEditOutfit = this.dialog.open(DialogAddEditOutfit, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: outfit
    });
    dialogEditOutfit.afterClosed().subscribe((result: Outfit) => {
      if (result != null && result != undefined) {
        console.log(result);
        this.getMyOutfits();
      };
    });
  }

  getMyOutfits() {
    this.OutfitService.getMyOutfits(+localStorage.getItem("userId")!).subscribe({
      next: (data) => {
        this.outfits = data;
        console.log(data);
        this.cdr.detectChanges();
      }
    })
  }

  deleteMyStuff(id: number) {
    this.OutfitService.deleteOutfit(id).subscribe({
      next: (result) => {
        console.log("del success");
        this.getMyOutfits();
      }
    });
  }

  publishMyStuff(outfit: Outfit) {
    outfit.status = "hidden";
    this.OutfitService.publishOutfit(outfit).subscribe({
      next: (result) => {
        console.log("publish success");
        this.getMyOutfits();
      }
    });
  }
}
