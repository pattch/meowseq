import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-note',
  templateUrl: './grid-note.component.html',
  styleUrls: ['./grid-note.component.css']
})
export class GridNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('Hello this is a test');
  }

}
