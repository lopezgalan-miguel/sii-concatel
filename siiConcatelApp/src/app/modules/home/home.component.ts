import { Component, OnInit } from '@angular/core';
import { SuperHeroService } from 'src/app/services/super-hero.service';
import { SuperHeroInterface } from 'src/app/shared/interfaces/superhero.interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSuperHeroComponent } from 'src/app/shared/components/update-super-hero/update-super-hero.component';
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
    this.superHeroList = this.superHeroService.getAllSuperHeroesList();
  }

  searchSuperHeroName(nameSearch:string) {
      this.superHeroList = this.superHeroService.getSuperHeroByName(nameSearch);
  }

  updateHero(id:number) {
    const selectedSuperHero =  this.superHeroService.getSuperHeroById(id);
    const dialogRef = this.dialog.open(UpdateSuperHeroComponent, {
      width: '250px',
      data: {selectedSuperHero}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
      }
    });
  }
}
