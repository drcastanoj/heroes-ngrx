//heroes reducer
import { IHero } from 'app/heroes/IHeroe';
export const ADD_HERO: string = 'ADD_HERO';
export const ADD_ALL_HERO: string = 'ADD_ALL_HERO';
export const EDIT_HERO: string = 'EDIT_HERO';
export const DELETE_HERO: string = 'DELETE_HERO';


export interface IHeroState {
  heroes: IHero[];
}

function addHeroAction(state: IHero[], payload: IHero): IHero[] {
  return <IHero[]>[...state, payload];
}

function addAllHeroAction(state: IHero[], payload: IHero[]): IHero[] {
  return <IHero[]>[...state, ...payload];
}

function editHeroAction(state: IHero[], payload: IHero): IHero[] {
  const heroes: IHero[] = [...state];
  const hero: IHero = Object.assign({}, payload);
  heroes[hero._id] = hero;
  return heroes;
}

function deleteHeroAction(state: IHero[], payload: string): IHero[] {
  return [...state.slice(0, parseInt(payload, 0)), ...state.slice(parseInt(payload, 0) + 1, state.length )];
}

export const heroesReducer: any = (state: IHero[] = [], action: { type: string, payload: any }) => {  // tslint:disable-line
  switch (action.type) {
    case ADD_HERO:
      return addHeroAction(state, action.payload);
    case ADD_ALL_HERO:
      return addAllHeroAction(state, action.payload);
    case ADD_ALL_HERO:
      return editHeroAction(state, action.payload);
    case DELETE_HERO:
      return deleteHeroAction(state, action.payload);
    default:
      return state;
  }
};