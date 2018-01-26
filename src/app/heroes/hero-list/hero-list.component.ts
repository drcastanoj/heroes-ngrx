import { Component, OnInit } from '@angular/core';
import { HeroService } from 'app/heroes/share/hero.service';
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
  constructor(private heroService: HeroService, private store: Store<IHero[]>) { }

  public ngOnInit(): void {
    this.heroService.getHeroes();
    this.heroesObservable = this.store.pipe();
    this.heroesObservable.subscribe(heroes => {
      this.heroes = heroes;
    });
  }



}