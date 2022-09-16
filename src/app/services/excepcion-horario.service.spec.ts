import { TestBed } from '@angular/core/testing';

import { ExcepcionHorarioService } from './excepcion-horario.service';

describe('ExcepcionHorarioService', () => {
  let service: ExcepcionHorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcepcionHorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
