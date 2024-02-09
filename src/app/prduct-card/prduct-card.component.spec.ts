import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductCardComponent } from './prduct-card.component';

describe('PrductCardComponent', () => {
  let component: PrductCardComponent;
  let fixture: ComponentFixture<PrductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
