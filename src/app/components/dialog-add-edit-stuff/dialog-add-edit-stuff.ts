import { Stuff } from "./../../models/stuff";
import { Component, Inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { DialogAddEditOutfit } from "../dialog-add-edit-outfit/dialog-add-edit-outfit";
import { StuffService } from "../../service/stuff-service";

@Component({
  selector: "app-dialog-add-edit-stuff",
  imports: [
    MatIconModule,
    FormsModule,
    MatDialogModule
],
  templateUrl: "./dialog-add-edit-stuff.html",
  styleUrl: "./dialog-add-edit-stuff.css",
})
export class DialogAddEditStuff {
  editingStuff!: Stuff;
  dataStuffs!: any;

  constructor (
    public dialogRef: MatDialogRef<DialogAddEditOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: Stuff | null,
    private StuffService: StuffService,
  ) {
    this.editingStuff = data ? data : new Stuff();
    this.getDataForStuff();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getDataForStuff() {
    this.StuffService.getData().subscribe({
      next: (data) => {
        this.dataStuffs = data;
        console.log(this.dataStuffs[0].listBrands[0]);
      }
    })
  }

  editStuff(data: Stuff) {
    this.StuffService.editStuff(data).subscribe({
      next: (result) => {
        console.log("edit stuff success");
      }
    })
  }

  deleteStuff(id: number) {
    this.StuffService.deleteStuff(id).subscribe({
      next: (result) => {
        console.log("delete stuff success");
      }
    })
  }

  addStuff(data: Stuff) {
    this.StuffService.addStuff(data).subscribe({
      next: (result) => {
        console.log("add stuff success");
      }
    })
  }
}
