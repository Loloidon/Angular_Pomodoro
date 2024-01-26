import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtimerComponent } from './customtimer.component';

describe('CustomtimerComponent', () => {
  let component: CustomtimerComponent;
  let fixture: ComponentFixture<CustomtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomtimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
