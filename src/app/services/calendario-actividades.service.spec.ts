import { TestBed } from '@angular/core/testing';

import { CalendarioActividadesService } from './calendario-actividades.service';

describe('CalendarioActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarioActividadesService = TestBed.get(CalendarioActividadesService);
    expect(service).toBeTruthy();
  });
});
