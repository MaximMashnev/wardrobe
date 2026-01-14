import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { TuiStringHandler } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

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
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './dialog-add-edit-outfit.html',
  styleUrl: './dialog-add-edit-outfit.css',
})
export class DialogAddEditOutfit {
  protected listTags: Tag[] = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
  ]
  protected tag: Tag | null = null;
  protected strTag: TuiStringHandler<Tag> = (x) => x.name;

  protected listStyles: Style[] = [
    {id: 1, name: '3'},
    {id: 2, name: '4'},
  ]
  protected style: Style | null = null;
  protected strStyle: TuiStringHandler<Style> = (x) => x.name;

  dd1IsOpen: boolean = false;

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
