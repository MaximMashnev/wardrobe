import { UserService } from '../../../services/user-service';
import { StuffService } from '../../../../modules/stuff/services/stuff-service';
import { ChangeDetectionStrategy, Component, Inject, input, OnInit, ChangeDetectorRef } from '@angular/core';
import { TuiAvatar, TuiLike } from "@taiga-ui/kit";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle, MatDialogModule } from '@angular/material/dialog';
import { Outfit } from '../../../models/outfit';
import { publicUserInfo } from '../../../models/publicUserInfo';
import { Stuff } from '../../../models/stuff';
import { ActivatedRoute } from '@angular/router';

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
  // TODO убрать outfitId и добавить компонент или отставить и переделать, добавить открытие по ссылке
  outfitId: number | undefined;
  isDialogMode: boolean = false;
  selectMainPhoto: number = 0;
  stuffs!: Stuff[];

  constructor (
    public dialogRef: MatDialogRef<DialogShowOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: [Outfit, publicUserInfo],
    private StuffService: StuffService,
    public cdr: ChangeDetectorRef,
    public routes: ActivatedRoute
  ) {
    this.routes.params.subscribe(params => this.outfitId = params["outfitId"])
    console.log(data);
    this.isDialogMode = !!this.dialogRef;
    console.log(this.isDialogMode);
  }

  ngOnInit(): void {
    this.getStuffs();
  }

  getStuffs() {
    return this.StuffService.getStuffForOutfit(
      this.data[0].stuffIds.sort().reduce((url, id) => url + "id=" + id + "&", "")
    ).subscribe({
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
