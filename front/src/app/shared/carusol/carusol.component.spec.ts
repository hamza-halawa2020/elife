import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusolComponent } from './carusol.component';

describe('CarusolComponent', () => {
  let component: CarusolComponent;
  let fixture: ComponentFixture<CarusolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarusolComponent]
    });
    fixture = TestBed.createComponent(CarusolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
