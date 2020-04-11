import { TestBed } from '@angular/core/testing';

import { HistorialplagasService } from './historialplagas.service';

describe('HistorialplagasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialplagasService = TestBed.get(HistorialplagasService);
    expect(service).toBeTruthy();
  });
});
