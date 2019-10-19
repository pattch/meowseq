import { Injectable } from '@angular/core';

import {GridDataModule} from './grid-data.module';
import { GridData } from './grid-data';

// TODO: Pull this from some backend
const PATTERN_LENGTH = 16;
const SCALE = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  readonly gridData = new GridData(PATTERN_LENGTH, SCALE);

  constructor() {}

}
