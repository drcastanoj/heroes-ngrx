import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroList } from './hero-list/hero-list.component';
import { HeroService } from './share/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetail } from './hero-detail/hero-detail.component';
import { UIRouterModule } from '@uirouter/angular';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './reducers/heroes.reduces';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule,
    StoreModule.forRoot({ heroes: heroesReducer }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    HeroList,
    HeroDetail
  ],
  providers: [
    HeroService
  ],
  exports: [
    HeroList
  ]
})
export class HeroesModule { }