import { TestBed } from '@angular/core/testing';

import { SemillasService } from './semillas.service';

describe('SemillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemillasService = TestBed.get(SemillasService);
    expect(service).toBeTruthy();
  });
});
