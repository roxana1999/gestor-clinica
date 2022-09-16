import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionProdEliminarComponent } from './presentacion-prod-eliminar.component';

describe('PresentacionProdEliminarComponent', () => {
  let component: PresentacionProdEliminarComponent;
  let fixture: ComponentFixture<PresentacionProdEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionProdEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionProdEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
