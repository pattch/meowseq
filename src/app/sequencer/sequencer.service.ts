import { Injectable } from '@angular/core';
import { GridDataService } from '../grid-data/grid-data.service';
import {timer} from 'rxjs';

const EIGHTH_NOTE = 63; // 1/8 note in 120 bpm = 62.5 ms

@Injectable({
  providedIn: 'root'
})
export class SequencerService {
  private gridData = this.gridService.gridData;
  readonly heartbeat = timer(1000, EIGHTH_NOTE);

  constructor(private readonly gridService: GridDataService) {}

  initialize() {
    this.heartbeat.subscribe((t) => {
      const index = t % this.gridData.patternLength;
      const activeNotes = this.gridData.getActiveNotes(index);
      console.log(activeNotes);
    });
  }
}
