import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
