import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAccountNumberComponent } from './show-account-number.component';

describe('ShowAccountNumberComponent', () => {
  let component: ShowAccountNumberComponent;
  let fixture: ComponentFixture<ShowAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAccountNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
