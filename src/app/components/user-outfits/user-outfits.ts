import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';

@Component({
  selector: 'app-user-outfits',
  imports: [],
  templateUrl: './user-outfits.html',
  styleUrl: './user-outfits.css',
})
export class UserOutfits {

  constructor (
    public dialog: MatDialog,
  ) {

  }

  test = {
    id: 1,
    image: 'https://i.pinimg.com/1200x/f9/1b/38/f91b38b62b069ff7d769ab4311627d7b.jpg',
    likesCounter: 100,
  }

  openDialogShowOutfit(id: number) {
    this.dialog.open(DialogShowOutfit, {
      data: id,
      maxWidth: '1080px',
    });
  }
}
