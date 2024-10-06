import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStasticsComponent } from './app-stastics.component';

describe('AppStasticsComponent', () => {
  let component: AppStasticsComponent;
  let fixture: ComponentFixture<AppStasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppStasticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppStasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
