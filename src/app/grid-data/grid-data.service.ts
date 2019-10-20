import { Injectable } from '@angular/core';

import { GridData } from './grid-data';

// TODO: Pull this from some backend
const PATTERN_LENGTH = 16;
const SCALE = ['meow.wav', 'meow2.wav', 'meow3.wav'];

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  readonly gridData = new GridData(PATTERN_LENGTH, SCALE);

  constructor() {}

}
