import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-super-hero-searcher',
  templateUrl: './super-hero-searcher.component.html',
  styleUrls: ['./super-hero-searcher.component.scss']
})
export class SuperHeroSearcherComponent implements OnInit {

  @Output() superHeroNameEmit = new EventEmitter()

  superHeroName = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

  sendSearch() {
    this.superHeroNameEmit.emit(this.superHeroName.value)
  }

}
