import { TestBed } from '@angular/core/testing';

import { ServiceSubcategoriasService } from './service-subcategorias.service';

describe('ServiceSubcategoriasService', () => {
  let service: ServiceSubcategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSubcategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
