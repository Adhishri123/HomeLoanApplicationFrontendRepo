import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationStatusComponent } from './view-application-status.component';

describe('ViewApplicationStatusComponent', () => {
  let component: ViewApplicationStatusComponent;
  let fixture: ComponentFixture<ViewApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewApplicationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
