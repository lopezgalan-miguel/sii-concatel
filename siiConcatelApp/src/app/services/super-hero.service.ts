import { Injectable } from '@angular/core';
import { SuperHeroInterface } from '../shared/interfaces/superhero.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  superHeroList:SuperHeroInterface[] = [
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
  constructor() { }

  getAllSuperHeroesList() {
    return this.superHeroList;
  }

  getSuperHeroById(id: number): SuperHeroInterface | undefined {
    const selectedSuperHero = this.superHeroList.find(superHero => superHero.id === id);
    return selectedSuperHero;
  }

  getSuperHeroByName(name: string): SuperHeroInterface[] {
    let  selectedSuperHeroList: SuperHeroInterface[] = []
     this.superHeroList.forEach(superHero => {
       if(superHero.name.toLowerCase().includes(name.toLowerCase())) {
        selectedSuperHeroList.push(superHero)
       }
     });
    return selectedSuperHeroList;
  }

  addNewSuperHero(superHero: SuperHeroInterface): void {
    const newId = this.superHeroList.length +1;
    superHero.id  = newId;
    this.superHeroList.push(superHero)
  }

  returnIndexOfSpecificSuperHero(id: number): number {
    const selectedSuperHero = this.superHeroList.find(superHero => superHero.id === id);
    if(selectedSuperHero) {
      return this.superHeroList.indexOf(selectedSuperHero)
    }
    return -1;
  }

  updateSuperHero(superHeroUpdated: SuperHeroInterface):void {
    const indexOfUpdatedHero = this.returnIndexOfSpecificSuperHero(superHeroUpdated.id)
    if(indexOfUpdatedHero > -1) this.superHeroList[indexOfUpdatedHero] = superHeroUpdated;
  }

  removeSuperHeroById(id: number):void {
    const indexOfUpdatedHero = this.returnIndexOfSpecificSuperHero(id)
    if(indexOfUpdatedHero > -1) this.superHeroList.splice(indexOfUpdatedHero,1)
  }
}
