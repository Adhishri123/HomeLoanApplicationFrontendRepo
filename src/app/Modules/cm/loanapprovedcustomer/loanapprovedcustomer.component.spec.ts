import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapprovedcustomerComponent } from './loanapprovedcustomer.component';

describe('LoanapprovedcustomerComponent', () => {
  let component: LoanapprovedcustomerComponent;
  let fixture: ComponentFixture<LoanapprovedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanapprovedcustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanapprovedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
