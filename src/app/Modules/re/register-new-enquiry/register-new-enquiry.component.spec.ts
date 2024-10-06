import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewEnquiryComponent } from './register-new-enquiry.component';

describe('RegisterNewEnquiryComponent', () => {
  let component: RegisterNewEnquiryComponent;
  let fixture: ComponentFixture<RegisterNewEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNewEnquiryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterNewEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
