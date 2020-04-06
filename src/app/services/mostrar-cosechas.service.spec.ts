import { TestBed } from '@angular/core/testing';

import { MostrarCosechasService } from './mostrar-cosechas.service';

describe('MostrarCosechasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarCosechasService = TestBed.get(MostrarCosechasService);
    expect(service).toBeTruthy();
  });
});
