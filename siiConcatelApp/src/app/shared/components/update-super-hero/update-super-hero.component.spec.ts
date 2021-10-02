import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperHeroComponent } from './update-super-hero.component';

describe('UpdateSuperHeroComponent', () => {
  let component: UpdateSuperHeroComponent;
  let fixture: ComponentFixture<UpdateSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
