import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SequencerService } from './sequencer/sequencer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private readonly sequencer: SequencerService) {}

  ngOnInit() {
    this.sequencer.initialize();
  }
}
