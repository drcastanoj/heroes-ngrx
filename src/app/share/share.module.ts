import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIRouterModule } from '@uirouter/angular';
import { MetersPipe } from './meters.pipe';
import { OrdinalPipe } from './ordinal.pipe';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    UIRouterModule
  ],
  declarations: [
    MetersPipe,
    OrdinalPipe
  ],
  exports: [
    MetersPipe,
    OrdinalPipe
  ],
  providers: [
  ]
})
export class ShareModule { }