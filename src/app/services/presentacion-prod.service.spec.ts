import { TestBed } from '@angular/core/testing';

import { PresentacionProdService } from './presentacion-prod.service';

describe('PresentacionProdService', () => {
  let service: PresentacionProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentacionProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
