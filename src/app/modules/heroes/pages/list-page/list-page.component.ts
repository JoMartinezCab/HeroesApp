import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public heroes: Hero[] = [];
  constructor(private HeroService: HeroService){}

  ngOnInit(): void {
    this.HeroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }
}
