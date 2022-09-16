import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcepcionHorarioComponent } from './excepcion-horario.component';

describe('ExcepcionHorarioComponent', () => {
  let component: ExcepcionHorarioComponent;
  let fixture: ComponentFixture<ExcepcionHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcepcionHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcepcionHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
