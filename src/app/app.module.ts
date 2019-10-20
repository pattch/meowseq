import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridNoteComponent } from './grid-note/grid-note.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { GridComponent } from './grid/grid.component';
import { PauseComponent } from './pause/pause.component';

@NgModule({
  declarations: [
    AppComponent,
    GridNoteComponent,
    GridRowComponent,
    GridComponent,
    PauseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
