import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionProdActualizarComponent } from './presentacion-prod-actualizar.component';

describe('PresentacionProdActualizarComponent', () => {
  let component: PresentacionProdActualizarComponent;
  let fixture: ComponentFixture<PresentacionProdActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionProdActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionProdActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
