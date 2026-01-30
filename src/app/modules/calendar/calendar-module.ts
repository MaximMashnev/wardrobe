import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarPage } from './pages/calendar-page/calendar-page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: CalendarPage}
    ])
  ]
})
export class CalendarModule { }
