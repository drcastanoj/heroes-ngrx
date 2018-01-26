import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { UIRouterModule } from '@uirouter/angular';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';
@NgModule({
  imports: [
    BrowserModule,
    ShareModule,
    UIRouterModule.forRoot({ states: routes, useHash: true }),
    HttpClientModule,
    HeroesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
