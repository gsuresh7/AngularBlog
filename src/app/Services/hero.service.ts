import { Injectable } from '@angular/core';
import { Hero } from '../Models/hero';
import { StockNumber } from '../Models/StockNumber';
import { HEROES } from '../Models/mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class HeroService {
 private heroesUrl = 'http://localhost:50524/api/Authors';  // URL to web api
  //private StocksUrl = 'http://localhost:50524/api/Authors?gettaskstest=test'; 
 
constructor(private http: Http) { }
 
/*getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}*/

getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json() as Hero[])
             .catch(this.handleError);
}
 
/*getStocks(): Promise<StockNumber[]> {
  return this.http.get(this.StocksUrl)
             .toPromise()
             .then(response => response.json() as StockNumber[])
             .catch(this.handleError);
}*/

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

/* getHero(Id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.Id === Id));
}*/

getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError);
}

private headers = new Headers({'Content-Type': 'application/json'});

update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.Id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}

create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}