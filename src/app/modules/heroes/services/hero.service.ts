import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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
}
