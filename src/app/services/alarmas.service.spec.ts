import { TestBed } from '@angular/core/testing';

import { AlarmasService } from './alarmas.service';

describe('AlarmasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlarmasService = TestBed.get(AlarmasService);
    expect(service).toBeTruthy();
  });
});
