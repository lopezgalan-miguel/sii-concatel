import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroCardComponent } from './super-hero-card.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
