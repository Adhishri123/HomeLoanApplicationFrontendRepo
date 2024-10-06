import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilRejectedComponent } from './cibil-rejected.component';

describe('CibilRejectedComponent', () => {
  let component: CibilRejectedComponent;
  let fixture: ComponentFixture<CibilRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CibilRejectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CibilRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
