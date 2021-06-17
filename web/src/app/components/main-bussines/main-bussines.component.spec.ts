import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBussinesComponent } from './main-bussines.component';

describe('MainBussinesComponent', () => {
  let component: MainBussinesComponent;
  let fixture: ComponentFixture<MainBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBussinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
