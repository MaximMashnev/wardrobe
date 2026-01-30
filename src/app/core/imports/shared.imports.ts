import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';
import { TuiHint, TuiRoot, TuiTextfieldComponent } from '@taiga-ui/core';
import { TuiLike, TuiTextarea } from '@taiga-ui/kit';

export const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  RouterLinkWithHref,
  FormsModule,
  ReactiveFormsModule,

  // Mat
  MatIconModule,

  // Taiga
  TuiHint,
  TuiLike,
  TuiTextarea,
  TuiRoot,
  TuiTextfieldComponent,
];
