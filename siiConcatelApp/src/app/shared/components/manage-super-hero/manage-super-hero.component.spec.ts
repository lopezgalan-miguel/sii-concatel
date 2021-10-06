import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroInterface } from '../../interfaces/superhero.interface';

import { ManageSuperHeroComponent } from './manage-super-hero.component';

const superHeroMock: SuperHeroInterface = {
  id: 5,
  name: 'Test Name',
  lastName: 'Test Lastname',
  age: 18
}

const dialogMock = {
  close: () => { }
};

describe('ManageSuperHeroComponent', () => {
  let component: ManageSuperHeroComponent;
  let fixture: ComponentFixture<ManageSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSuperHeroComponent ],
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
    fixture = TestBed.createComponent(ManageSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on Init with superHero data, expect call setData and set isCreation to false', () => {
    const spySetData = spyOn(component,'setData');
    component.dialogData =  {selectedSuperHero: superHeroMock}
    component.ngOnInit();
    expect(spySetData).toHaveBeenCalled()
    expect(component.isCreation).toBeFalse();
    expect(component.superHeroSelect).toEqual(superHeroMock);
  });

  it('On init with dialogData tobeNull, set data toHaveBenCalled', () => {
    const spySetData = spyOn(component,'setData');
    component.ngOnInit();
    expect(spySetData).toHaveBeenCalled()
    expect(component.isCreation).toBeTruthy();
    expect(component.superHeroSelect).toBeUndefined()
  });

  it('Calling set Data, super hero defined', () => {
    component.superHeroSelect = superHeroMock;
    component.setData()
    expect(component.superHeroForm.controls.name.value).toEqual(superHeroMock.name)
    expect(component.superHeroForm.controls.lastName.value).toEqual(superHeroMock.lastName)
    expect(component.superHeroForm.controls.age.value).toEqual(superHeroMock.age)
  })

  it('Calling sendHero with superHeroForm valid', () => {
    const spyDialogClose = spyOn(component.dialogRef, 'close');
    component.superHeroSelect = superHeroMock;

    const expectCloseWith = {
      id: component.superHeroSelect.id,
      name: 'Test name',
      lastName: 'Test lastName',
      age: 18,
    }

    component.superHeroForm = new FormGroup({
      name: new FormControl(expectCloseWith.name),
      lastName: new FormControl(expectCloseWith.lastName),
      age: new FormControl(expectCloseWith.age)
    });
    
    component.sendHero()
    expect(spyDialogClose).toHaveBeenCalled()
    expect(spyDialogClose).toHaveBeenCalledWith(expectCloseWith)
  })

  it('Calling sendHero with superHeroForm invalid', () => {
    const spyDialogClose = spyOn(component.dialogRef, 'close');
    component.sendHero()
    expect(spyDialogClose).not.toHaveBeenCalled()
  })

  it('expect cancel called, call dialogRefClose', () => {
    const spyDialogClose = spyOn(component.dialogRef, 'close');
    component.cancel()
    expect(spyDialogClose).toHaveBeenCalled()
  })
});
