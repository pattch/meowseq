import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../grid-data/note';
import { SequencerService } from '../sequencer/sequencer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.css']
})
export class GridRowComponent implements OnInit {

  @Input() patternLength: number = 8;
  @Input() notes: Note[];

  readonly current: Observable<number> = this.sequencer.current;

  constructor(
    private readonly sequencer: SequencerService,
  ) {}

  ngOnInit() {
  }

}
