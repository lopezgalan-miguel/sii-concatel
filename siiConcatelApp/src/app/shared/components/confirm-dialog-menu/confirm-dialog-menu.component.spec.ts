import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmDialogMenuComponent } from './confirm-dialog-menu.component';

describe('ConfirmDialogMenuComponent', () => {
  let component: ConfirmDialogMenuComponent;
  let fixture: ComponentFixture<ConfirmDialogMenuComponent>;

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogMenuComponent ],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: dialogMock},
        { provide: MAT_DIALOG_DATA, useValue: {},
          
        }
      ]
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

  it('updateCall emit superhero id', () => {
    const spyClose = spyOn(component.dialogRef, 'close');
    component.accept()
    expect(spyClose).toHaveBeenCalled()
    expect(spyClose).toHaveBeenCalledWith({accept: true})
  });

  it('removeCall emit superhero id', () => {
    const spyClose = spyOn(component.dialogRef, 'close');
    component.cancel()
    expect(spyClose).toHaveBeenCalled()
  });
});
