import { TestBed } from '@angular/core/testing';

import { WheatherService } from './wheather.service';

describe('WheatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheatherService = TestBed.get(WheatherService);
    expect(service).toBeTruthy();
  });
});
