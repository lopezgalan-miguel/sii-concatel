import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule,} from '@angular/material/dialog';
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
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        MatDialogModule
      ],
      providers: [
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
});
