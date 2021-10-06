import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroInterface } from '../../interfaces/superhero.interface';

@Component({
  selector: 'app-manage-super-hero',
  templateUrl: './manage-super-hero.component.html',
  styleUrls: ['./manage-super-hero.component.scss']
})
export class ManageSuperHeroComponent implements OnInit {

  isCreation = true;
  superHeroForm!: FormGroup;
  superHeroSelect!: SuperHeroInterface
  
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: {selectedSuperHero: SuperHeroInterface},
  public dialogRef: MatDialogRef<ManageSuperHeroComponent>) { 
    
  }

  ngOnInit(): void {
    if(this.dialogData.selectedSuperHero) {
      this.superHeroSelect = this.dialogData.selectedSuperHero;
      this.isCreation = false;
    }
    this.setData()
  }

  setData() {
    this.superHeroForm = new FormGroup({
      name: new FormControl(this.superHeroSelect?.name || null, Validators.required),
      lastName: new FormControl(this.superHeroSelect?.lastName || null, Validators.required),
      age: new FormControl(this.superHeroSelect?.age)
    });
  }

  sendHero() {
    if(this.superHeroForm.valid) {
      const superHeroUpdate = {
        id: this.superHeroSelect?.id || null,
        name: this.superHeroForm.get('name')?.value,
        lastName: this.superHeroForm.get('lastName')?.value,
        age: this.superHeroForm.get('age')?.value || 0,
      }
      this.dialogRef.close(superHeroUpdate)
    }
  }

  cancel() {
    this.dialogRef.close()
  }
  

}
