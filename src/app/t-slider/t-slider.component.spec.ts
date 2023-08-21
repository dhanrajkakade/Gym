import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSliderComponent } from './t-slider.component';

describe('TSliderComponent', () => {
  let component: TSliderComponent;
  let fixture: ComponentFixture<TSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TSliderComponent]
    });
    fixture = TestBed.createComponent(TSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
