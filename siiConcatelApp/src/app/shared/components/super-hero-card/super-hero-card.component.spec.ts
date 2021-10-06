import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperHeroInterface } from '../../interfaces/superhero.interface';

import { SuperHeroCardComponent } from './super-hero-card.component';


const superHeroMock: SuperHeroInterface = {
  id: 5,
  name: 'Test Name',
  lastName: 'Test Lastname',
  age: 18
}
describe('SuperHeroCardComponent', () => {
  let component: SuperHeroCardComponent;
  let fixture: ComponentFixture<SuperHeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroCardComponent);
    component = fixture.componentInstance;
    component.superHero = superHeroMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updateCall emit superhero id', () => {
    const spyEmitUpdate = spyOn(component.updateClick, 'emit');
    component.updateCall()
    expect(spyEmitUpdate).toHaveBeenCalled()
    expect(spyEmitUpdate).toHaveBeenCalledWith(superHeroMock.id)
  });

  it('removeCall emit superhero id', () => {
    const spyEmitUpdate = spyOn(component.removeClick, 'emit');
    component.removeCall()
    expect(spyEmitUpdate).toHaveBeenCalled()
    expect(spyEmitUpdate).toHaveBeenCalledWith(superHeroMock.id)
  });
});
