import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService]
})

export class AppComponent implements OnInit{

  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  async getHeroes() {
    let heroes = this.heroService.getHeroes();
    this.heroes = await heroes;
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
