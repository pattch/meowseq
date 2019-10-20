import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-note',
  templateUrl: './grid-note.component.html',
  styleUrls: ['./grid-note.component.css']
})
export class GridNoteComponent implements OnInit {

    active = false;
    

  constructor() { }

    toggleActive() {
        this.active = !this.active;
    }

}