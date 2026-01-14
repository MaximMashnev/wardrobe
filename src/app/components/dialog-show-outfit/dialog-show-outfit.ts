import { ChangeDetectionStrategy, Component, Inject, input } from '@angular/core';
import { TuiAvatar, TuiLike } from "@taiga-ui/kit";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-dialog-show-outfit',
  imports: [
    TuiAvatar,
    MatIconModule,
    TuiLike,
    FormsModule,
],
  templateUrl: './dialog-show-outfit.html',
  styleUrl: './dialog-show-outfit.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShowOutfit {
  outfitId = input.required<string>();
  isDialogMode: boolean = false;
  selectMainPhoto: number = 0;

  constructor (
    public dialogRef: MatDialogRef<DialogShowOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: number | undefined,
  ) {
    console.log(data);
    this.isDialogMode = !!this.dialogRef;
    console.log(this.isDialogMode);
  }

  test = {
    id: 1,
    userId: 0,
    username: "string",
    imgProfile: "st",
    style: "string",
    tag: "string",
    imgs: [
      "https://a.lmcdn.ru//files/cms/get_the_look/gallery_images/IMG_2563_16-12-2025.jpg",
      "https://a.lmcdn.ru//files/cms/get_the_look/gallery_images/IMG_2581_16-12-2025.jpg",
      "https://a.lmcdn.ru//files/cms/get_the_look/gallery_images/IMG_2507_16-12-2025.jpg",
    ],
    stuffIds: [0, 1],
    likesCounter: 100,
    beenLiked: false
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

  closeDialog() {
    this.dialogRef.close();
  }
}
