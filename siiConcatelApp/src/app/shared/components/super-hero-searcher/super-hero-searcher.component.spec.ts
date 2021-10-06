import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { SuperHeroSearcherComponent } from './super-hero-searcher.component';

describe('SuperHeroSearcherComponent', () => {
  let component: SuperHeroSearcherComponent;
  let fixture: ComponentFixture<SuperHeroSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('send search emit correct string', () => {
    const testStringSuperHeroName = 'test hero name'
   const spyEmit = spyOn(component.superHeroNameEmit, 'emit');
   component.superHeroName = new FormControl(testStringSuperHeroName)
   component.sendSearch()
   expect(spyEmit).toHaveBeenCalled()
   expect(spyEmit).toHaveBeenCalledWith(testStringSuperHeroName)
  });
});
