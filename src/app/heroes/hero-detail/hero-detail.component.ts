import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/angular';


/**
 * Main view with card list
 */
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetail implements OnInit {


  constructor(private trans: Transition) { }

  public ngOnInit(): void {
    alert(this.trans.params().heroId);
  }



}