import { Component, OnInit } from '@angular/core';
import { SuperHeroService } from 'src/app/services/super-hero.service';
import { SuperHeroInterface } from 'src/app/shared/interfaces/superhero.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogMenuComponent } from 'src/app/shared/components/confirm-dialog-menu/confirm-dialog-menu.component';
import { ManageSuperHeroComponent } from 'src/app/shared/components/manage-super-hero/manage-super-hero.component';
import { ConfirmModalInterface } from 'src/app/shared/interfaces/confirmModal.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  superHeroList: SuperHeroInterface[] = [];
  superHeroSearch: string = '';
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
      this.superHeroSearch = nameSearch;
      this.superHeroList = this.superHeroService.getSuperHeroByName(this.superHeroSearch);
  }

  createHero() {
    const dialogRef = this.dialog.open(ManageSuperHeroComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.superHeroService.addNewSuperHero(result)
        this.searchSuperHeroName(this.superHeroSearch)
      }
    });
  }

  updateHero(id:number) {
    const selectedSuperHero =  this.superHeroService.getSuperHeroById(id);
    const dialogRef = this.dialog.open(ManageSuperHeroComponent, {
      data: {selectedSuperHero}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.superHeroService.updateSuperHero(result)
        this.searchSuperHeroName(this.superHeroSearch)
      }
    });
  }

  removeHero(id:number) {
    const data:ConfirmModalInterface = {
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
        this.searchSuperHeroName(this.superHeroSearch)
      }
    });
  }
}
