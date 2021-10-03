import { Component, OnInit } from '@angular/core';
import { SuperHeroService } from 'src/app/services/super-hero.service';
import { SuperHeroInterface } from 'src/app/shared/interfaces/superhero.interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSuperHeroComponent } from 'src/app/shared/components/update-super-hero/update-super-hero.component';
import { ConfirmDialogMenuComponent } from 'src/app/shared/components/confirm-dialog-menu/confirm-dialog-menu.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  superHeroList: SuperHeroInterface[] = [];
  constructor(
   public superHeroService: SuperHeroService,
   public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllSuperHeroe()
  }

  getAllSuperHeroe() {
    this.superHeroList = this.superHeroService.getAllSuperHeroesList();
  }

  searchSuperHeroName(nameSearch:string) {
      this.superHeroList = this.superHeroService.getSuperHeroByName(nameSearch);
  }

  createHero() {
    const dialogRef = this.dialog.open(UpdateSuperHeroComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.superHeroService.addNewSuperHero(result)
        this.getAllSuperHeroe()
      }
    });
  }

  updateHero(id:number) {
    const selectedSuperHero =  this.superHeroService.getSuperHeroById(id);
    const dialogRef = this.dialog.open(UpdateSuperHeroComponent, {
      data: {selectedSuperHero}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.superHeroService.updateSuperHero(result)
        this.getAllSuperHeroe()
      }
    });
  }

  removeHero(id:number) {
    const data = {
      title: 'Kill super hero alert',
      mssg: 'You are going to eliminate a superhero, are you sure you want to go to the dark side?',
      confirmButton: 'Remove',
      removeType: true
    }
    const dialogRef = this.dialog.open(ConfirmDialogMenuComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result.accept) {
        this.superHeroService.removeSuperHeroById(id)
        this.getAllSuperHeroe()
      }
    });
  }
}
