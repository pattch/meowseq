import { Injectable } from '@angular/core';

import { GridData } from './grid-data';

// TODO: Pull this from some backend
const PATTERN_LENGTH = 16;
const SCALE = [
  'hihat1.wav',
  'hihat2.wav',
  'hihat3.wav',
  'hihat4.wav',
  'ride.wav',
  'rim.wav',
  'snare1.wav',
  'snare2.wav',
  'tom1.wav',
  'tom2.wav',
  'meow3.wav',
  'kick1.wav',
  'kick2.wav',
];

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  readonly gridData = new GridData(PATTERN_LENGTH, SCALE);

  constructor() {}

}
