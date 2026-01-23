import { UserService } from './../../service/user-service';
import { StuffService } from './../../service/stuff-service';
import { ChangeDetectionStrategy, Component, Inject, input, OnInit, ChangeDetectorRef } from '@angular/core';
import { TuiAvatar, TuiLike } from "@taiga-ui/kit";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle, MatDialogModule } from '@angular/material/dialog';
import { Outfit } from '../../models/outfit';
import { publicUserInfo } from '../../models/publicUserInfo';

@Component({
  standalone: true,
  selector: 'app-dialog-show-outfit',
  imports: [
    TuiAvatar,
    MatIconModule,
    TuiLike,
    FormsModule,
    MatDialogModule
],
  templateUrl: './dialog-show-outfit.html',
  styleUrl: './dialog-show-outfit.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShowOutfit implements OnInit {
  outfitId = input.required<string>();
  isDialogMode: boolean = false;
  selectMainPhoto: number = 0;
  stuffs!: any;

  constructor (
    public dialogRef: MatDialogRef<DialogShowOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: [Outfit, publicUserInfo],
    private StuffService: StuffService,
    public cdr: ChangeDetectorRef,
  ) {
    console.log(data);
    this.isDialogMode = !!this.dialogRef;
    console.log(this.isDialogMode);
  }

  ngOnInit(): void {
    this.getStuffs();
  }

  getStuffs() {
    let url = "";
    for (let id of this.data[0].stuffIds) {
      url += "id=" + id + "&";
    }
    return this.StuffService.getStuffForShowingOutfit(url).subscribe({
      next: (data) => {
        this.stuffs = data;
        this.cdr.detectChanges();
      },
      error(err) {
        console.log(err);
      },
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

  closeDialog() {
    this.dialogRef.close();
  }
}
