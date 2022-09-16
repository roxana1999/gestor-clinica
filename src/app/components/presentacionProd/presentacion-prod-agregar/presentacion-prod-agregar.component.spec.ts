import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionProdAgregarComponent } from './presentacion-prod-agregar.component';

describe('PresentacionProdAgregarComponent', () => {
  let component: PresentacionProdAgregarComponent;
  let fixture: ComponentFixture<PresentacionProdAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionProdAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionProdAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
