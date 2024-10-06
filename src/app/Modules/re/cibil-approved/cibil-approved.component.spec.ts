import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilApprovedComponent } from './cibil-approved.component';

describe('CibilApprovedComponent', () => {
  let component: CibilApprovedComponent;
  let fixture: ComponentFixture<CibilApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CibilApprovedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CibilApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
