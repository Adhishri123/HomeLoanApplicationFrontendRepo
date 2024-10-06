import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentApprovedCustomerComponent } from './document-approved-customer.component';

describe('DocumentApprovedCustomerComponent', () => {
  let component: DocumentApprovedCustomerComponent;
  let fixture: ComponentFixture<DocumentApprovedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentApprovedCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentApprovedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
