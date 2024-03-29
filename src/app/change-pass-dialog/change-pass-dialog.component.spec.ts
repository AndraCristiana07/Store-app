import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassDialogComponent } from './change-pass-dialog.component';

describe('ChangePassDialogComponent', () => {
  let component: ChangePassDialogComponent;
  let fixture: ComponentFixture<ChangePassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePassDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
