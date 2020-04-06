import { TestBed } from '@angular/core/testing';

import { MostrarUsuariosService } from './mostrar-usuarios-service';

describe('MostrarUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarUsuariosService = TestBed.get(MostrarUsuariosService);
    expect(service).toBeTruthy();
  });
});
