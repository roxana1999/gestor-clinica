import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExcepcionHorarioComponent } from './agregar-excepcion-horario.component';

describe('AgregarExcepcionHorarioComponent', () => {
  let component: AgregarExcepcionHorarioComponent;
  let fixture: ComponentFixture<AgregarExcepcionHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExcepcionHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarExcepcionHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
