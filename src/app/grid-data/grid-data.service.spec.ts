import { TestBed } from '@angular/core/testing';

import { GridDataService } from './grid-data.service';

describe('GridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridDataService = TestBed.get(GridDataService);
    expect(service).toBeTruthy();
  });
});
