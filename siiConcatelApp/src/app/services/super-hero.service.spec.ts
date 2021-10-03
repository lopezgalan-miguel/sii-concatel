import { TestBed } from '@angular/core/testing';
import { SuperHeroInterface } from '../shared/interfaces/superhero.interface';

import { SuperHeroService } from './super-hero.service';

describe('SuperHeroService', () => {
  let service: SuperHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSuperHeroesList return array', () => {
    const returnedSuperHeroes = service.getAllSuperHeroesList();
    expect(returnedSuperHeroes).toEqual(service.superHeroList);
  });

  it('getSuperHeroById return specificHero', () => {
    const returnedSuperHeroe:SuperHeroInterface[] | undefined = service.getSuperHeroByName('man');
    expect(returnedSuperHeroe[0]?.id).toEqual(1);
    expect(returnedSuperHeroe[0]?.name).toEqual('Manolito');
    expect(returnedSuperHeroe[0]?.lastName).toEqual('Invencible');
    expect(returnedSuperHeroe[0]?.age).toEqual(18);
  });

  it('getSuperHeroByName return specificHero', () => {
    const returnedSuperHeroe:SuperHeroInterface | undefined = service.getSuperHeroById(1);
    expect(returnedSuperHeroe?.id).toEqual(1);
    expect(returnedSuperHeroe?.name).toEqual('Manolito');
    expect(returnedSuperHeroe?.lastName).toEqual('Invencible');
    expect(returnedSuperHeroe?.age).toEqual(18);
  });

  it('getSuperHeroById return undefined id not exist', () => {
    const returnedSuperHeroe:SuperHeroInterface | undefined = service.getSuperHeroById(-1);
    expect(returnedSuperHeroe).toBeUndefined()
  });

  it('addNewSuperHero',() => {
    let currentLengthList = service.superHeroList.length;
    const superHeroTest:SuperHeroInterface  = {
      id: 5,
      name: 'test',
      lastName: 'test',
      age: 99
    }
    service.addNewSuperHero(superHeroTest);
    expect(service.superHeroList.length).toEqual(currentLengthList+1)
  })

  it('returnIndexOfSpecificSuperHero send specific id', () => {
    const indexInArray = service.returnIndexOfSpecificSuperHero(1);
    expect(indexInArray).toEqual(0)
  })

  it('returnIndexOfSpecificSuperHero send id not founded', () => {
    const indexInArray = service.returnIndexOfSpecificSuperHero(9999);
    expect(indexInArray).toEqual(-1)
  })

  it('updateSuperHero updateFirst superHero', () => {
    const superHeroUpdated = {
      id:1,
      name: 'Test',
      lastName: 'Test',
      age: 99
    }
    service.updateSuperHero(superHeroUpdated)
    expect(service.superHeroList[0].name).toEqual(superHeroUpdated.name)
    expect(service.superHeroList[0].lastName).toEqual(superHeroUpdated.lastName)
    expect(service.superHeroList[0].age).toEqual(superHeroUpdated.age)
  })

  it('updateSuperHero update unknown superHero', () => {
    const superHeroUpdated = {
      id:999,
      name: 'Test',
      lastName: 'Test',
      age: 99
    }
    service.updateSuperHero(superHeroUpdated)
    expect(service.superHeroList[0].name).not.toEqual(superHeroUpdated.name)
    expect(service.superHeroList[0].lastName).not.toEqual(superHeroUpdated.lastName)
    expect(service.superHeroList[0].age).not.toEqual(superHeroUpdated.age)
  })

  it('removeSuperHeroById send existing id', () => {
    const originalLength = service.superHeroList.length
    service.removeSuperHeroById(1)
    expect(service.superHeroList.length).toEqual(originalLength -1)
  })

  it('removeSuperHeroById send unknow id', () => {
    const originalLength = service.superHeroList.length
    service.removeSuperHeroById(999)
    expect(service.superHeroList.length).toEqual(originalLength)
  })

});
