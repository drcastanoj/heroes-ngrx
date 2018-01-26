import { HeroService } from './heroes/share/hero.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-container',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  constructor(private heroService: HeroService) {
    this.heroService.getHeroes();
  }
}