import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../../services/hero.service.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public heroes: Hero[] = [];
  constructor(private HeroServiceService: HeroServiceService){}

  ngOnInit(): void {
    this.HeroServiceService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }
}
