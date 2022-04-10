import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconComponent } from '../nano-grid-angular/components/icon/icon.component';
// import { RowComponent } from '../nano-grid-angular/components/row/row.component';
// import { ColumnComponent } from '../nano-grid-angular/components/column/column.component';
import { BtnComponent } from '../nano-grid-angular/components/btn/btn.component';
import { ScrollAreaComponent } from '../nano-grid-angular/components/scroll-area/scroll-area.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    // RowComponent,
    // ColumnComponent,
    BtnComponent,
    ScrollAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
