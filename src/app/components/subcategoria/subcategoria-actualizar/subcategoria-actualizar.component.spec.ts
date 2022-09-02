import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaActualizarComponent } from './subcategoria-actualizar.component';

describe('SubcategoriaActualizarComponent', () => {
  let component: SubcategoriaActualizarComponent;
  let fixture: ComponentFixture<SubcategoriaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriaActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoriaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
