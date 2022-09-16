import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAgregarComponent } from './persona-agregar.component';

describe('PersonaAgregarComponent', () => {
  let component: PersonaAgregarComponent;
  let fixture: ComponentFixture<PersonaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
