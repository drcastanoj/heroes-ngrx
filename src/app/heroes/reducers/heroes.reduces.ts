//messages reducer
import { IHero } from 'app/heroes/IHeroe';
export const ADD_HERO: string = 'ADD_HERO';
export const ADD_ALL_HERO: string = 'ADD_ALL_HERO';
export const EDIT_HERO: string = 'EDIT_HERO';

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