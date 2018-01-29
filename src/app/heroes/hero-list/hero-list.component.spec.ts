import { expect } from 'chai';
import { HeroList } from './hero-list.component';
import { stub } from 'sinon';
import { Observable } from 'rxjs';
import { } from '@types/chai';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('AppComponent ', () => {
  let store: any;
  let tran: any;
  let heroService: any;

  beforeEach(() => {
    store = {
      select: stub().returns(Observable.of({})),
      dispatch: stub()
    };
    tran = {
      params: stub()
    };
    heroService = {
      getHeroes: stub().returns(Observable.of([{}, {}]))
    };
  });

  it('should instance AppComponent', () => {
    const component: HeroList = new HeroList(undefined, undefined);
    expect(component).to.exist;
  });

  it('should instance AppComponent', () => {
    const component: HeroList = new HeroList(store, heroService);
    component.ngOnInit();
    expect(store.select).to.have.been;
  });
});