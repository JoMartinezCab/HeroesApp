import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl: string = environment.baseUrl;
  public url:string;

  constructor(private httpClient: HttpClient) {
    this.url = `${ this.baseUrl }/heroes`;
  }

  getHeroes():Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.url)
  }

  getHeroById(hero:string):Observable<Hero|undefined>{
    const url = `${this.url}/${ hero }`;

    return this.httpClient.get<Hero>(url)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  getSuggestions( query:string ): Observable<Hero[]|undefined>{
    const url = `${ this.url }?q=${ query }&_limit=5`;
    return this.httpClient.get<Hero[]>(url)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  addHero(hero:Hero):Observable<Hero>{
    const url = `${this.url}`;

    return this.httpClient.post<Hero>(url, hero)
  }

  updateHero(hero: Hero):Observable<Hero>{
    if(!hero.id) throw Error('Hero id is required');

    const url = `${this.url}/${ hero.id }`;

    return this.httpClient.patch<Hero >(url, hero);
  }

  deleteHero(id: string):Observable<boolean>{
    if(!id) throw Error('Hero id is required');

    const url = `${this.url}/${ id }`;

    return this.httpClient.delete(url)
      .pipe(
        map( res => true),
        catchError(err => of(false))
      );
  }
}
