
import { NgModule } from '@angular/core';

import { SuperHeroCardComponent } from './components/super-hero-card/super-hero-card.component';
import { SuperHeroSearcherComponent } from './components/super-hero-searcher/super-hero-searcher.component';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdateSuperHeroComponent } from './components/update-super-hero/update-super-hero.component';

@NgModule({
  declarations: [
    SuperHeroCardComponent,
    SuperHeroSearcherComponent,
    UpdateSuperHeroComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    SuperHeroCardComponent,
    SuperHeroSearcherComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class SharedModule { }
