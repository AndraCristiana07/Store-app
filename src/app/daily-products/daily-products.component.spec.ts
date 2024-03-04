import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProductsComponent } from './daily-products.component';

describe('DailyProductsComponent', () => {
  let component: DailyProductsComponent;
  let fixture: ComponentFixture<DailyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DailyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
