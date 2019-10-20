import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SequencerService } from '../sequencer/sequencer.service';

@Component({
  selector: 'app-pause',
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PauseComponent implements OnInit {
  paused = this.sequencer.isPaused;

  constructor(private readonly sequencer: SequencerService) {}

  ngOnInit() {
  }

  togglePaused() {
    this.paused = !this.paused;
    this.sequencer.togglePaused();
  }

}
