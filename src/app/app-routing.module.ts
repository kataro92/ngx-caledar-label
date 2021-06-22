import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxCalendarLabelComponent } from './ngx-calendar-label/ngx-calendar-label.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
