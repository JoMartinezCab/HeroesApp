import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    const url = `${ this.baseUrl }/heroes`;

    return this.httpClient.get<Hero[]>(url)
  }
}
