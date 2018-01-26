import { IHeroState } from './../reducers/heroes.reduces';
import { Component, OnInit } from '@angular/core';
import { IHero } from 'app/heroes/IHeroe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


/**
 * Main view with card list
 */
@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroList implements OnInit {
  private heroesObservable: Observable<IHero[]>;
  private heroes: IHero[];
  constructor(private store: Store<IHeroState>) { }
  public ngOnInit(): void {
    this.heroesObservable = this.store.select('heroes');
    this.heroesObservable.subscribe(heroes => {
      this.heroes = heroes;
    });
  }



}