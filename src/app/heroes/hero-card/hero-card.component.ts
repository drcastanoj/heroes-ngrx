import { Component, Input } from '@angular/core';
import { IHero } from 'app/heroes/IHeroe';

/**
 * detail view with hero
 */
@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCard {
  @Input() public hero: IHero;
  @Input() public id: IHero;
}