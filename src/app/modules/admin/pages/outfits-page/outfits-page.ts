import { Outfit } from './../../../../shared/models/outfit';
import { OutfitService } from './../../../outfit/services/outfit-service';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule} from "@angular/forms";
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddEditOutfit } from '../../../outfit/components/dialogs/dialog-add-edit-outfit/dialog-add-edit-outfit';

@Component({
  selector: 'app-outfits-page',
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatButtonModule,
    MatIconModule, MatSelectModule, FormsModule, MatTooltipModule
  ],
  templateUrl: './outfits-page.html',
  styleUrl: './outfits-page.css',
})
export class OutfitsPage implements AfterViewInit {
  displayedColumns: string[] = ['id', 'user_id', 'name', 'style', 'tag', 'imgs', 'stuffIds', 'status', 'control'];
  dataSource = new MatTableDataSource<Outfit>([]);
  page = 0;
  limit = 5;
  totalItems!: number;
  filterValue: string = "";
  defSort: Sort = { active: 'id', direction: 'asc' };
  timeout: any;
  selectedGroup: string = '0';
  outfitsData: any;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private OutfitService: OutfitService,
    public dialog: MatDialog,
    private titleService: Title,
    private cdr: ChangeDetectorRef
  ) {
    this.loadData();
    this.getOutfitsData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => this.paginator!.length = this.totalItems);
  }

  getOutfitsData() {
    this.OutfitService.getDataOutfits().subscribe(data => {
      this.outfitsData = data;
    });
  }

  loadData(page: number = this.page, limit: number = this.limit) {
    const sortField = this.getSortField();
    const filter = this.filterValue?.trim() || '';

    this.OutfitService.getDataTable(filter, page, limit, sortField, this.selectedGroup).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.items);
      this.totalItems = data.meta.total_items;
      this.limit = data.meta.per_page;
      this.cdr.detectChanges();
    });
  }

  getSortField(): string {
    if (!this.defSort.direction) return 'id';
    return this.defSort.direction == 'asc' ? this.defSort.active : '-' + this.defSort.active;
  }

  update(event: PageEvent) {
    const isSizeChanged = this.limit != event.pageSize;

    this.limit = event.pageSize;
    const newPage = isSizeChanged ? 0 : event.pageIndex;
    if (isSizeChanged) this.paginator?.firstPage();

    this.loadData(newPage, this.limit);
  }

  sortData(sort: Sort) {
    this.defSort = sort;
    this.loadData();
    this.paginator?.firstPage();
  }

  applyFilter() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getOutfitsData();
      this.loadData();
      this.paginator?.firstPage();
    }, 1000);
  }

  openDialogAddOutfit() {
    const dialogAddOutfit = this.dialog.open(DialogAddEditOutfit, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: null
    });
    dialogAddOutfit.afterClosed().subscribe((result: Outfit) => {
      if (result != null && result != undefined) {
        console.log(result);
        this.loadData();
      };
    });
  }

  openDialogEditOutfit(outfit: Outfit) {
    const dialogEditOutfit = this.dialog.open(DialogAddEditOutfit, {
      maxWidth: '1020px',
      minWidth: 'auto',
      data: outfit
    });
    dialogEditOutfit.afterClosed().subscribe((result: Outfit) => {
      if (result != null && result != undefined) {
        console.log(result);
        this.loadData();
      };
    });
  }

  deleteOutfit(Outfit: Outfit) {
    this.OutfitService.deleteOutfit(Outfit.id!).subscribe(() => this.loadData(this.page, this.limit));
  }
}
