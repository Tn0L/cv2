import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsmenuComponent } from './bsmenu.component';

describe('BsmenuComponent', () => {
  let component: BsmenuComponent;
  let fixture: ComponentFixture<BsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
