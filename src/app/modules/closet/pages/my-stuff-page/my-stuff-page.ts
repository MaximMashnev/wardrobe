import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { Stuff } from '../../../../shared/models/stuff';
import { StuffService } from '../../../stuff/services/stuff-service';
import { ClosetStuffWidget } from "../../../stuff/components/widgets/closet-stuff-widget/closet-stuff-widget";
import { DialogAddEditStuff } from '../../../stuff/pages/dialog-add-edit-stuff/dialog-add-edit-stuff';

@Component({
  selector: 'app-my-stuff-page',
  imports: [MatIconModule, ClosetStuffWidget],
  templateUrl: './my-stuff-page.html',
  styleUrl: './my-stuff-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyStuffPage implements OnInit{
  stuffs!: Stuff[];

  constructor (
    public dialog: MatDialog,
    private StuffService: StuffService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getMyStuffs();
  }

  ngOnChanges(): void {
    this.getMyStuffs();
  }

  getMyStuffs() {
    this.StuffService.getMyStuffs(+localStorage.getItem("userId")!).subscribe({
      next: (data) => {
        this.stuffs = data;
        this.cdr.detectChanges();
      }
    })
  }

  openDialogAddStuff() {
    const dialogAddStuff = this.dialog.open(DialogAddEditStuff, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: null
    });
    dialogAddStuff.afterClosed().subscribe((result: Stuff) => {
      if (result != null && result != undefined) {
        console.log("add stuff")
        this.ngOnChanges();
      };
    });
  }
}
