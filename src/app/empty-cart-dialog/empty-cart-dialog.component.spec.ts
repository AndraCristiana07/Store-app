import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCartDialogComponent } from './empty-cart-dialog.component';

describe('EmptyCartDialogComponent', () => {
  let component: EmptyCartDialogComponent;
  let fixture: ComponentFixture<EmptyCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyCartDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
