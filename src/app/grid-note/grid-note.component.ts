import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../grid-data/note';

@Component({
  selector: 'app-grid-note',
  templateUrl: './grid-note.component.html',
  styleUrls: ['./grid-note.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridNoteComponent implements OnInit {

  @Input() note: Note;
  @Output() noteChange = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {}

  toggleActive() {
    this.note.active = !this.note.active;
    this.noteChange.emit(this.note);
  }

}
