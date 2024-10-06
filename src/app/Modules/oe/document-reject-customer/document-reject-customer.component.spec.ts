import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRejectCustomerComponent } from './document-reject-customer.component';

describe('DocumentRejectCustomerComponent', () => {
  let component: DocumentRejectCustomerComponent;
  let fixture: ComponentFixture<DocumentRejectCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentRejectCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentRejectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
