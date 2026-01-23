import { StuffService } from './../../service/stuff-service';
import { OutfitService } from './../../service/outfit-service';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { Stuff } from '../../models/stuff';
import { DialogSelStuffForOutfits } from '../dialog-sel-stuff-for-outfits/dialog-sel-stuff-for-outfits';
import { Outfit } from '../../models/outfit';

interface Tag {
  id: number;
  name: string;
}

interface Style {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dialog-add-edit-outfit',
  imports: [
    MatIconModule,
    FormsModule,
    MatDialogModule
],
  templateUrl: './dialog-add-edit-outfit.html',
  styleUrl: './dialog-add-edit-outfit.css',
})

export class DialogAddEditOutfit implements OnInit {
  outfit!: Outfit;
  dataOutfits: any = "Загрузка...";

  HeadIsOpen: boolean = false;
  HeadList: Array<Stuff> = [];

  AccessoriesIsOpen: boolean = false;
  AccessoriesList: Array<Stuff> = [];

  UpperBodyIsOpen: boolean = false;
  UpperBodyList: Array<Stuff> = [];

  LowerBodyIsOpen: boolean = false;
  LowerBodyList: Array<Stuff> = [];

  HandsIsOpen: boolean = false;
  HandsList: Array<Stuff> = [];

  LegsIsOpen: boolean = false;
  LegsList: Array<Stuff> = [];

  constructor (
    public dialogRef: MatDialogRef<DialogAddEditOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: Outfit | null,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private OutfitService: OutfitService,
    private StuffService: StuffService
  ) {
    this.outfit = data ? data : new Outfit();
  }

  ngOnInit(): void {
    this.getDataForOutfit();
    this.getStuffs();
  }

  openDialogSelectStuff(category: number, list: Array<Stuff>) {
    const dialogAddStuff = this.dialog.open(DialogSelStuffForOutfits, {
      maxWidth: '1020px',
      minWidth: '500px',
      data: category
    });
    dialogAddStuff.afterClosed().subscribe((result: Stuff) => {
      if (result != null && result != undefined) {
        list.push(result);
        this.cdr.detectChanges();
      };
    });
  }

  getDataForOutfit() {
    this.OutfitService.getData().subscribe({
      next: (data) => {
        this.dataOutfits = data[0];
        this.cdr.detectChanges();
      }
    })
  }

  getStuffs() {
    let url = "";
    for (let id of this.outfit.stuffIds) {
      url += "id=" + id + "&";
    }
    return this.StuffService.getStuffForOutfit(url).subscribe({
      next: (data) => {
        for (let stuff of <any>data) {
          if (stuff.category == 1) {this.HeadList.push(stuff)};
          if (stuff.category == 2) {this.AccessoriesList.push(stuff)};
          if (stuff.category == 3) {this.UpperBodyList.push(stuff)};
          if (stuff.category == 4) {this.HandsList.push(stuff)};
          if (stuff.category == 5) {this.LowerBodyList.push(stuff)};
          if (stuff.category == 6) {this.LegsList.push(stuff)};
        }
        this.cdr.detectChanges();
      },
      error(err) {
        console.log(err);
      },
    })
  }

  saveOutfitInStorage() {
    // Сохранение в память, чтобы при закрытии продолжить собирать образ. Возможно, не стоит добавлять
  }

  addOutfit(data: Outfit) {
    const listTypes = [this.HeadList, this.AccessoriesList, this.UpperBodyList, this.LowerBodyList, this.HandsList, this.LegsList];
    for (let list of listTypes) {
      for (let item of list) {
        data.stuffIds.push(<number>item.id);
        this.outfit.cost += item.cost;
      }
    }
    this.OutfitService.addOutfit(data).subscribe({
      next: (result) => {
        console.log("add outfit success");
      }
    })
  }

  editOutfit(data: Outfit) {
    this.OutfitService.editOutfit(data).subscribe({
      next: (result) => {
        console.log("edit outfit success");
      }
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
