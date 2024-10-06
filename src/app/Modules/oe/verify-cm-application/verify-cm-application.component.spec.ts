import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCmApplicationComponent } from './verify-cm-application.component';

describe('VerifyCmApplicationComponent', () => {
  let component: VerifyCmApplicationComponent;
  let fixture: ComponentFixture<VerifyCmApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyCmApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyCmApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
