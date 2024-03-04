import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductCartComponent } from './prduct-cart.component';

describe('PrductCartComponent', () => {
  let component: PrductCartComponent;
  let fixture: ComponentFixture<PrductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrductCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
