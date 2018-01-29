import { Component, OnInit } from '@angular/core';
import { Transition, StateService } from '@uirouter/angular';
import { IHero } from 'app/heroes/IHeroe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IHeroState } from './../reducers/heroes.reduces';
import * as HeroesActions from '../reducers/heroes.reduces';
import { HeroService } from '../share/hero.service';
/**
 * Main view with card list
 */
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetail implements OnInit {

  private heroesObservable: Observable<IHero[]>;
  private hero: IHero;
  private edit: boolean = false;
  constructor(private trans: Transition, private store: Store<IHeroState>, private state: StateService, private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroesObservable = this.store.select('heroes');
    this.heroesObservable.subscribe(heroes => {
      if (heroes.length > 0) {
        this.hero = heroes[this.trans.params().heroId];
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

  public editHero(): void {
    this.edit = true;
  }


  public saveHero(): void {
    this.hero._id = this.trans.params().heroId;
    this.store.dispatch({
      type: HeroesActions.EDIT_HERO,
      payload: this.hero
    });
    this.edit = false;
  }

  public deleteHero(): void {
    this.store.dispatch({
      type: HeroesActions.DELETE_HERO,
      payload: this.trans.params().heroId
    });
    this.state.go('hero-list');
  }

}