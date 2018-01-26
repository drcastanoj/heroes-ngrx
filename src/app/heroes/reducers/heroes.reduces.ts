


//heroes reducer
import { IHero } from 'app/heroes/IHeroe';
export const ADD_HERO: string = 'ADD_HERO';
export const ADD_ALL_HERO: string = 'ADD_ALL_HERO';
export const EDIT_HERO: string = 'EDIT_HERO';


// reducers.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface IHeroState {
  heroes: IHero[];
}

export const selectFeature: any = createFeatureSelector<IHeroState>('heroes'); // tslint:disable-line
export const selectFeatureCount: any = createSelector(selectFeature, (state: IHeroState) => state.heroes); // tslint:disable-line

export const heroesReducer: any = (state: IHero[] = [], action: { type: string, payload: any }) => {  // tslint:disable-line
  switch (action.type) {
    case ADD_HERO:
      return <IHero[]>[...state, action.payload];
    case ADD_ALL_HERO:
      return <IHero[]>[...state, ...action.payload];
    default:
      return state;
  }
};