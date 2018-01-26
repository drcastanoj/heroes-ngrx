import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/angular';
import { IHero } from 'app/heroes/IHeroe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IHeroState } from './../reducers/heroes.reduces';


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
  constructor(private trans: Transition, private store: Store<IHeroState>) { }

  public ngOnInit(): void {
    this.heroesObservable = this.store.select('heroes');
    this.heroesObservable.subscribe(heroes => {
      this.hero = heroes[this.trans.params().heroId];
    });
  }



}