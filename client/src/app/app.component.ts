import {Component, OnInit} from '@angular/core';
import {HeroService} from './services/hero.service';
import { Hero } from './hero';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  errorMessage: string;
  constructor(private heroService: HeroService) {
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        heroes => {
          console.log(heroes);
          this.heroes = heroes
        },
        error => this.errorMessage = error
      )
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
