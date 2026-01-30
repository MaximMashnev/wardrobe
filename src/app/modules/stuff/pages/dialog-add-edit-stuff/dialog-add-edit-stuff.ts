import { Stuff } from "../../../../shared/models/stuff";
import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { DialogAddEditOutfit } from "../../../outfit/components/dialogs/dialog-add-edit-outfit/dialog-add-edit-outfit";
import { StuffService } from "../../services/stuff-service";

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
export class DialogAddEditStuff implements OnInit {
  editingStuff!: Stuff;
  dataStuffs: any = "Загрузка...";

  constructor (
    public dialogRef: MatDialogRef<DialogAddEditOutfit>,
    @Inject(MAT_DIALOG_DATA) public data: Stuff | null,
    private StuffService: StuffService,
    public cdr: ChangeDetectorRef,
  ) {
    this.editingStuff = data ? data : new Stuff();
  }

  ngOnInit(): void {
    this.getDataForStuff();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getDataForStuff() {
    this.StuffService.getData().subscribe({
      next: (data) => {
        this.dataStuffs = data[0];
        this.cdr.detectChanges();
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
