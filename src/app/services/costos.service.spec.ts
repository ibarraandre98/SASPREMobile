import { TestBed } from '@angular/core/testing';

import { CostosService } from './costos.service';

describe('CostosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostosService = TestBed.get(CostosService);
    expect(service).toBeTruthy();
  });
});
