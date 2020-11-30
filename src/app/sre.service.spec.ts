import { TestBed } from '@angular/core/testing';

import { SreService } from './sre.service';

describe('SreService', () => {
  let service: SreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
