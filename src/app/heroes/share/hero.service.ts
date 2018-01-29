import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from 'app/heroes/IHeroe';
import { Observable } from 'rxjs';


@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<IHero[]> {
    return this.http.get('https://udem.herokuapp.com/heroes');
  }

}