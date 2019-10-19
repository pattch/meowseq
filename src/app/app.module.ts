import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridNoteComponent } from './grid-note/grid-note.component';
import { GridRowComponent } from './grid-row/grid-row.component';

@NgModule({
  declarations: [
    AppComponent,
    GridNoteComponent,
    GridRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
