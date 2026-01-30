import { MyStuffPage } from './../../../../closet/pages/my-stuff-page/my-stuff-page';
import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DialogAddEditStuff } from '../../../pages/dialog-add-edit-stuff/dialog-add-edit-stuff';
import { Stuff } from '../../../../../shared/models/stuff';
import { MatDialog } from '@angular/material/dialog';
import { StuffService } from '../../../services/stuff-service';
import { MatIconModule } from "@angular/material/icon";
import { TuiHint } from '@taiga-ui/core';

@Component({
  selector: 'closet-stuff-widget',
  imports: [
    MatIconModule,
    TuiHint
  ],
  templateUrl: './closet-stuff-widget.html',
  styleUrl: './closet-stuff-widget.css',
})
export class ClosetStuffWidget {

  @Input()
  stuff!: Stuff;

  constructor (
    public dialog: MatDialog,
    private StuffService: StuffService,
    public cdr: ChangeDetectorRef,
    public MyStuffPage: MyStuffPage
  ) {}

  openDialogEditStuff(stuff: Stuff) {
    const dialogEditStuff = this.dialog.open(DialogAddEditStuff, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: stuff
    });
    dialogEditStuff.afterClosed().subscribe((result: Stuff) => {
      if (result != null && result != undefined) {
        console.log(result);
        this.cdr.detectChanges();
      };
    });
  }

  deleteMyStuff(id: number) {
    this.StuffService.deleteStuff(id).subscribe({
      next: (result) => {
        console.log("del success");
        this.MyStuffPage.ngOnChanges();
      }
    });
  }
}
