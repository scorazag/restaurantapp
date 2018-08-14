import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreRestauranteComponent } from './nombre-restaurante.component';

describe('NombreRestauranteComponent', () => {
  let component: NombreRestauranteComponent;
  let fixture: ComponentFixture<NombreRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
