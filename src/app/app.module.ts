import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCalendarLabelComponent } from './ngx-calendar-label/ngx-calendar-label.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxCalendarLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
