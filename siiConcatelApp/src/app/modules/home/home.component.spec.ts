import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef,} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { SuperHeroInterface } from 'src/app/shared/interfaces/superhero.interface';

import { HomeComponent } from './home.component';

const mockSuperHeroeList :SuperHeroInterface[]= [
  {
    id: 1,
    name: 'Manolito',
    lastName: 'Invencible',
    age: 18
  },
  {
    id: 2,
    name: 'Menganita',
    lastName: 'Mary Sue',
    age: 24
  },
  { 
    id: 3,
    name: 'Dark Vader',
    lastName: ' im your father',
    age: 55
  }
]

const superHeroMock: SuperHeroInterface = {
  id: 5,
  name: 'Test Name',
  lastName: 'Test Lastname',
  age: 18
}

const dialogMock = {
  close: () => { },
  afterClosed: () => of()
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init, spec call function', () => {
    const spyGetAllSuperHero = spyOn(component, 'getAllSuperHeroe');
    component.ngOnInit()
    expect(spyGetAllSuperHero).toHaveBeenCalled()
  });

  it('getAllSuperHeroesList, spec set super hero list', () => {
    const spyGetAllSuperHeroService = spyOn(component.superHeroService, 'getAllSuperHeroesList').and.returnValue(mockSuperHeroeList)
    component.getAllSuperHeroe()
    expect(spyGetAllSuperHeroService).toHaveBeenCalled()
    expect(component.superHeroList.length).toEqual(3)
  });

  it('searchSuperHeroName expect return value', () => {
    component.superHeroList = mockSuperHeroeList;
    component.searchSuperHeroName('man')
    expect(component.superHeroList.length).toEqual(1)
  });

  it('component create hero calling', () => {
    const spyAddNewSuperHero = spyOn(component.superHeroService,'addNewSuperHero')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of(superHeroMock)
      } as MatDialogRef<unknown, unknown>
    );
    component.createHero()
    expect(spyAddNewSuperHero).toHaveBeenCalled();
    expect(spyAddNewSuperHero).toHaveBeenCalledWith(superHeroMock);
    expect(spyOnSearchSuperHeroName).toHaveBeenCalled()
  });

  it('component create hero cancel', () => {
    const spyAddNewSuperHero = spyOn(component.superHeroService,'addNewSuperHero')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of(null)
      } as MatDialogRef<unknown, unknown>
    );
    component.createHero()
    expect(spyAddNewSuperHero).not.toHaveBeenCalled();
    expect(spyOnSearchSuperHeroName).not.toHaveBeenCalled()
  });

  it('updateHero calling with id 1' , () => {
    const spyUpdateSuperHero = spyOn(component.superHeroService,'updateSuperHero')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of(superHeroMock)
      } as MatDialogRef<unknown, unknown>
    );
    component.updateHero(1)
    expect(spyUpdateSuperHero).toHaveBeenCalled();
    expect(spyUpdateSuperHero).toHaveBeenCalledWith(superHeroMock);
    expect(spyOnSearchSuperHeroName).toHaveBeenCalled()
  });

  it('updateHero calling with id 1 but cancel' , () => {
    const spyUpdateSuperHero = spyOn(component.superHeroService,'updateSuperHero')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of(null)
      } as MatDialogRef<unknown, unknown>
    );
    component.updateHero(0)
    expect(spyUpdateSuperHero).not.toHaveBeenCalled();
    expect(spyOnSearchSuperHeroName).not.toHaveBeenCalled()
  });

  it('removeHero calling with id 1' , () => {
    const spyRemoveSuperHero = spyOn(component.superHeroService,'removeSuperHeroById')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of({accept: true})
      } as MatDialogRef<unknown, unknown>
    );
    component.removeHero(1)
    expect(spyRemoveSuperHero).toHaveBeenCalled();
    expect(spyOnSearchSuperHeroName).toHaveBeenCalled()
  });

  it('removeHero calling with id 1 but cancel' , () => {
    const spyRemoveSuperHero = spyOn(component.superHeroService,'removeSuperHeroById')
    const spyOnSearchSuperHeroName = spyOn(component,'searchSuperHeroName')
    spyOn(component.dialog, 'open').and.returnValue(
      {
        afterClosed: () => of({accept: false})
      } as MatDialogRef<unknown, unknown>
    );
    component.removeHero(0)
    expect(spyRemoveSuperHero).not.toHaveBeenCalled();
    expect(spyOnSearchSuperHeroName).not.toHaveBeenCalled()
  });
});
