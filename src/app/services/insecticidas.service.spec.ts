import { TestBed } from '@angular/core/testing';

import { InsecticidasService } from './insecticidas.service';

describe('InsecticidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsecticidasService = TestBed.get(InsecticidasService);
    expect(service).toBeTruthy();
  });
});
