
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { SuperHeroCardComponent } from './components/super-hero-card/super-hero-card.component';
import { SuperHeroSearcherComponent } from './components/super-hero-searcher/super-hero-searcher.component';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { ManageSuperHeroComponent } from './components/manage-super-hero/manage-super-hero.component';
import { ConfirmDialogMenuComponent } from './components/confirm-dialog-menu/confirm-dialog-menu.component';

@NgModule({
  declarations: [
    SuperHeroCardComponent,
    SuperHeroSearcherComponent,
    ManageSuperHeroComponent,
    ConfirmDialogMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    SuperHeroCardComponent,
    SuperHeroSearcherComponent,
    ConfirmDialogMenuComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class SharedModule { }
