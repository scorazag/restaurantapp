import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResComponent } from './menu-res.component';

describe('MenuResComponent', () => {
  let component: MenuResComponent;
  let fixture: ComponentFixture<MenuResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
