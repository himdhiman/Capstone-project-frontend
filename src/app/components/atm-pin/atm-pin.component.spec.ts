import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmPinComponent } from './atm-pin.component';

describe('AtmPinComponent', () => {
  let component: AtmPinComponent;
  let fixture: ComponentFixture<AtmPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
