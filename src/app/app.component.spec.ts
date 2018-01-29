import { expect } from 'chai';
import { AppComponent } from './app.component';
import { } from '@types/mocha';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('AppComponent ', () => {
  it('should instance AppComponent', () => {
    const component: AppComponent = new AppComponent();
    expect(component).to.exist;
  });
});