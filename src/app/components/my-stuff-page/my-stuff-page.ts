import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {TuiHint} from '@taiga-ui/core';
import { DialogAddEditStuff } from '../dialog-add-edit-stuff/dialog-add-edit-stuff';
import { Stuff } from '../../models/stuff';
import { StuffService } from "../../service/stuff-service";

@Component({
  selector: 'app-my-stuff-page',
  imports: [MatIconModule, TuiHint],
  templateUrl: './my-stuff-page.html',
  styleUrl: './my-stuff-page.css',
})
export class MyStuffPage implements OnInit{

  clothings: any;

  constructor (
    public dialog: MatDialog,
    private StuffService: StuffService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getMyStuffs();
  }

  openDialogAddStuff() {
    const dialogAddStuff = this.dialog.open(DialogAddEditStuff, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: null
    });
    dialogAddStuff.afterClosed().subscribe((result: Stuff) => {
      if (result != null) {
        console.log(result);
      };
    });
  }

  openDialogEditStuff(stuff: Stuff) {
    const dialogEditStuff = this.dialog.open(DialogAddEditStuff, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: stuff
    });
    dialogEditStuff.afterClosed().subscribe((result: Stuff) => {
      if (result != null) {
        console.log(result);
      };
    });
  }

  getMyStuffs() {
    this.StuffService.getMyStuffs(+localStorage.getItem("userId")!).subscribe({
      next: (data) => {
        this.clothings = data;
        console.log(data);
        this.cdr.detectChanges();
      }
    })
  }

  deleteMyStuff(id: number) {
    this.StuffService.deleteStuff(id).subscribe({
      next: (result) => {
        console.log("del success");
        this.getMyStuffs();
      }
    });
  }
}
