import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { SuperHeroInterface } from '../../interfaces/superhero.interface';

@Component({
  selector: 'app-super-hero-card',
  templateUrl: './super-hero-card.component.html',
  styleUrls: ['./super-hero-card.component.scss']
})
export class SuperHeroCardComponent implements OnInit {

  @Input() superHero!: SuperHeroInterface;
  @Output() updateClick= new EventEmitter()
  @Output() removeClick= new EventEmitter()
  constructor() {
  }

  ngOnInit(): void {
  }

  updateCall() {
    this.updateClick.emit(this.superHero.id);
  }

  removeCall() {
    this.removeClick.emit(this.superHero.id);
  }

}
