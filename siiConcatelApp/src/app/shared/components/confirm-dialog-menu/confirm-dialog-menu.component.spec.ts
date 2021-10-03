import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogMenuComponent } from './confirm-dialog-menu.component';

describe('ConfirmDialogMenuComponent', () => {
  let component: ConfirmDialogMenuComponent;
  let fixture: ComponentFixture<ConfirmDialogMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
