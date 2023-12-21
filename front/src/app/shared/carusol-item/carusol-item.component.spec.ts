import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusolItemComponent } from './carusol-item.component';

describe('CarusolItemComponent', () => {
  let component: CarusolItemComponent;
  let fixture: ComponentFixture<CarusolItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarusolItemComponent]
    });
    fixture = TestBed.createComponent(CarusolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
