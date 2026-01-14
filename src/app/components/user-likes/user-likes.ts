import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';

@Component({
  selector: 'app-user-likes',
  imports: [],
  templateUrl: './user-likes.html',
  styleUrl: './user-likes.css',
})
export class UserLikes {

  constructor (
    public dialog: MatDialog,
  ) {

  }

  test = {
    id: 1,
    image: 'https://i.pinimg.com/736x/fd/6d/0a/fd6d0a93824fa83f0f73ee35b0acaecf.jpg',
    likesCounter: 100,
  }

  openDialogShowOutfit(id: number) {
    this.dialog.open(DialogShowOutfit, {
      data: id,
      maxWidth: '1080px',
    });
  }
}
