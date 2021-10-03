import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroInterface } from '../../interfaces/superhero.interface';

@Component({
  selector: 'app-update-super-hero',
  templateUrl: './update-super-hero.component.html',
  styleUrls: ['./update-super-hero.component.scss']
})
export class UpdateSuperHeroComponent implements OnInit {

  isCreation = true;
  superHeroForm!: FormGroup;
  superHeroSelect!: SuperHeroInterface
  
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: {selectedSuperHero: SuperHeroInterface},
  public dialogRef: MatDialogRef<UpdateSuperHeroComponent>,) { 
    
  }

  ngOnInit(): void {
    
    if(this.dialogData?.selectedSuperHero) {
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
