import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AiStylistPage } from './pages/ai-stylist-page/ai-stylist-page';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: AiStylistPage}
    ])
  ]
})
export class AiStylistModule { }
