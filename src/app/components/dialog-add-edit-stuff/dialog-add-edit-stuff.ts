import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from '@angular/forms';
import {tuiItemsHandlersProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {type TuiStringHandler} from '@taiga-ui/cdk';

interface Category {
  id: number;
  name: string;
}

interface Brand {
  id: number;
  name: string;
}

interface Size {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dialog-add-edit-stuff',
  imports: [
    MatIconModule,
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
],
  templateUrl: './dialog-add-edit-stuff.html',
  styleUrl: './dialog-add-edit-stuff.css',
})
export class DialogAddEditStuff {
  protected listCategories: Category[] = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
  ]
  protected category: Category | null = null;
  protected strCategory: TuiStringHandler<Category> = (x) => x.name;

  protected listBrands: Brand[] = [
    {id: 1, name: 'Brunello Cucinelli'},
    {id: 2, name: 'Stefano Ricci'},
    {id: 3, name: 'Kiton'},
    {id: 4, name: 'Zilli'},
    {id: 5, name: 'Dolce&Gabbana'},
  ]
  protected brand: Brand | null = null;
  protected strBrand: TuiStringHandler<Brand> = (x) => x.name;

  protected listSize: Size[] = [
    {id: 1, name: 's'},
    {id: 2, name: 'm'},
    {id: 3, name: 'l'},
    {id: 4, name: 'xl'},
    {id: 5, name: 'xxl'},
  ]
  protected size: Category | null = null;
  protected strSize: TuiStringHandler<Size> = (x) => x.name;

  constructor (
    // public dialogRef: MatDialogRef<DialogAddEditOutfit>,
    // @Inject(MAT_DIALOG_DATA) public data: number | undefined,
  ) {
    // console.log(data);
  }

  closeDialog() {
    // this.dialogRef.close();
  }

}
