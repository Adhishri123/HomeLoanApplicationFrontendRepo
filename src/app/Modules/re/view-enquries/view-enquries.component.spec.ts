import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnquriesComponent } from './view-enquries.component';

describe('ViewEnquriesComponent', () => {
  let component: ViewEnquriesComponent;
  let fixture: ComponentFixture<ViewEnquriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEnquriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEnquriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
