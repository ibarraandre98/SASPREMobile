import { TestBed } from '@angular/core/testing';

import { CultivosService } from './cultivos.service';

describe('CultivosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CultivosService = TestBed.get(CultivosService);
    expect(service).toBeTruthy();
  });
});
