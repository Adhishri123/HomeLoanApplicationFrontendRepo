import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSanctionletterComponent } from './view-sanctionletter.component';

describe('ViewSanctionletterComponent', () => {
  let component: ViewSanctionletterComponent;
  let fixture: ComponentFixture<ViewSanctionletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSanctionletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
