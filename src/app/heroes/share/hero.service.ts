import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from 'app/heroes/IHeroe';
import { Store } from '@ngrx/store';
import * as HeroesActions from '../reducers/heroes.reduces';


@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private store: Store<IHero>) { }

  public getHeroes(): void {
    this.http.get('https://udem.herokuapp.com/heroes').subscribe((heroes: IHero[]) => {
      this.store.dispatch({
        type: HeroesActions.ADD_ALL_HERO,
        payload: heroes
      });
    });
  }

}