import { Injectable } from '@angular/core';
import { GridDataService } from '../grid-data/grid-data.service';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';
import { AudioService } from '../sound/audio.service';

const EIGHTH_NOTE = 63; // 1/8 note in 120 bpm = 62.5 ms
const QUARTER_NOTE = 125; // 1/4 note in 120 bpm = 125 ms

@Injectable({
  providedIn: 'root'
})
export class SequencerService {
  private gridData = this.gridService.gridData;
  private paused = false;
  readonly heartbeat = timer(1000, QUARTER_NOTE);
  readonly current = this.heartbeat.pipe(
    map((tick) => tick % this.gridData.patternLength));

  constructor(
    private readonly gridService: GridDataService,
    private readonly audioService: AudioService,
  ) {}

  initialize() {
    this.audioService.loadAudioClips(this.gridService.scale);
    this.current.subscribe((current) => {
      if (!this.paused) {
        const activeNotes = this.gridData.getActiveNotes(current);
        this.audioService.triggerAudio(activeNotes);
      }
    });
  }

  togglePaused() {
    this.paused = !this.paused;
  }

  get isPaused() {
    return this.paused;
  }
}
