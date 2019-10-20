import { Injectable } from '@angular/core';
import { GridDataService } from '../grid-data/grid-data.service';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';
import { AudioService } from '../sound/audio.service';

const EIGHTH_NOTE = 63; // 1/8 note in 120 bpm = 62.5 ms

@Injectable({
  providedIn: 'root'
})
export class SequencerService {
  private gridData = this.gridService.gridData;
  readonly heartbeat = timer(1000, EIGHTH_NOTE);
  readonly current = this.heartbeat.pipe(
    map((tick) => tick % this.gridData.patternLength));

  constructor(
    private readonly gridService: GridDataService,
    private readonly audioService: AudioService,
  ) {}

  initialize() {
    this.current.subscribe((current) => {
      const activeNotes = this.gridData.getActiveNotes(current);
      this.audioService.triggerAudio(activeNotes);
    });
  }
}
