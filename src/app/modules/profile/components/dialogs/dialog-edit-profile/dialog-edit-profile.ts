import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule, MatOption } from '@angular/material/select';
import { User } from '../../../../../shared/models/user';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-dialog-edit-profile',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './dialog-edit-profile.html',
  styleUrl: './dialog-edit-profile.css',
})
export class DialogEditProfile {
  editingUser: User;
  user: User;
  userRole = localStorage.getItem("role");
  validNameInput = false;

  readonly GENDERS: string[] = ["Мужской", "Женский"];

  constructor(
    public dialogRef: MatDialogRef<DialogEditProfile>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
      this.editingUser = data ? {...data} : new User();
      this.user = data;
      if (data) {
        this.editingUser = this.user;
      }
    }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateFormUsername(formValueName: string): boolean {
    this.validNameInput = /^[a-zA-Zа-яА-Я]+$/.test(formValueName) ? true : false;
    return this.validNameInput;
  }

  checkValidateConfirm(): boolean {
    return (this.validNameInput) ? false : true;
  };
}

