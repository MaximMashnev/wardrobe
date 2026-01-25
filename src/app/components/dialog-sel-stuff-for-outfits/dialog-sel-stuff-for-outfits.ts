import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { DialogAddEditOutfit } from '../dialog-add-edit-outfit/dialog-add-edit-outfit';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { StuffService } from "../../service/stuff-service";
import { Stuff } from '../../models/stuff';

@Component({
  selector: 'app-dialog-sel-stuff-for-outfits',
  imports: [
    MatIconModule,
    TuiHint,
    MatDialogModule
],
  templateUrl: './dialog-sel-stuff-for-outfits.html',
  styleUrl: './dialog-sel-stuff-for-outfits.css',
})
export class DialogSelStuffForOutfits implements OnInit {
  clothings!: Stuff[];

  constructor (
    public dialogRef: MatDialogRef<DialogAddEditOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private StuffService: StuffService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getStuffs();
  }

  getStuffs() {
    this.StuffService.getMyStuffsWithCategory(+localStorage.getItem("userId")!, this.data).subscribe({
      next: (data) => {
        this.clothings = data;
        console.log(data);
        this.cdr.detectChanges();
      }
    })
  }

  addingOutfit(stuff: Stuff) {
    console.log(stuff);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
