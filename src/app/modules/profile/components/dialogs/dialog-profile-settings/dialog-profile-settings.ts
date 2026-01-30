import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../../../../shared/models/user';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-dialog-profile-settings',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  templateUrl: './dialog-profile-settings.html',
  styleUrl: './dialog-profile-settings.css',
})
export class DialogProfileSettings {
  editingUser: User;
  user: User;

  constructor (
    public dialogRef: MatDialogRef<DialogProfileSettings>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
    this.editingUser = data ? {...data} : new User();
    this.user = data;
    if (data) {
      this.editingUser = this.user;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
