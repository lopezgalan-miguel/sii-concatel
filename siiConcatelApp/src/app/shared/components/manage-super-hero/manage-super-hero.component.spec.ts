import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuperHeroComponent } from './manage-super-hero.component';

describe('ManageSuperHeroComponent', () => {
  let component: ManageSuperHeroComponent;
  let fixture: ComponentFixture<ManageSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSuperHeroComponent ]
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
});
