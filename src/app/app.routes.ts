import { HeroList } from './heroes/hero-list/hero-list.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { HeroDetail } from './heroes/hero-detail/hero-detail.component';

/** Definición de rutas generales */
export const routes: Ng2StateDeclaration[] = [
  { name: 'hero-list', url: '', component: HeroList },
  { name: 'hero-detail', url: 'hero/detail/:heroId', component: HeroDetail }

];



