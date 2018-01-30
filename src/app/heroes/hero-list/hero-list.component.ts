import { Component, OnInit } from '@angular/core';
import { IHero } from 'app/heroes/IHeroe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IHeroState } from './../reducers/heroes.reduces';
import * as HeroesActions from '../reducers/heroes.reduces';
import { HeroService } from '../share/hero.service';

/**
 * Main view with hero list
 */
@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroList implements OnInit {
  private heroesObservable: Observable<IHero[]>;
  private heroes: IHero[];

  constructor(private store: Store<IHeroState>, private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroesObservable = this.store.select('heroes');
    this.heroesObservable.subscribe(heroes => {
      if (heroes.length > 0) {
        this.heroes = heroes;
      } else {
        this.heroService.getHeroes().subscribe((data) => {
          this.store.dispatch({
            type: HeroesActions.ADD_ALL_HERO,
            payload: data
          });
        });
      }
    });
  }

}