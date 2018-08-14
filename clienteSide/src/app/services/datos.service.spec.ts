import { TestBed, inject } from '@angular/core/testing';

import { DatosService } from './datos.service';

describe('DatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosService]
    });
  });

  it('should be created', inject([DatosService], (service: DatosService) => {
    expect(service).toBeTruthy();
  }));
});
