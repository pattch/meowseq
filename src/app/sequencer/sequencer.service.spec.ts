import { TestBed } from '@angular/core/testing';

import { SequencerService } from './sequencer.service';

describe('SequencerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SequencerService = TestBed.get(SequencerService);
    expect(service).toBeTruthy();
  });
});
