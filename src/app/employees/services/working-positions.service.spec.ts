import { TestBed } from '@angular/core/testing';

import { WorkingPositionsService } from './working-positions.service';

describe('WorkingPositionsService', () => {
  let service: WorkingPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
