import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarRollosComponent } from './cargar-rollos.component';

describe('CargarRollosComponent', () => {
  let component: CargarRollosComponent;
  let fixture: ComponentFixture<CargarRollosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarRollosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarRollosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
