import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionProdListarComponent } from './presentacion-prod-listar.component';

describe('PresentacionProdListarComponent', () => {
  let component: PresentacionProdListarComponent;
  let fixture: ComponentFixture<PresentacionProdListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionProdListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionProdListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
