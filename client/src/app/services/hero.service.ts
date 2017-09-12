import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroService{

  constructor (private http: Http) {}

  getHeroes () {
    return this.http.get(`/api/heroes`)
      .map(
        (heroes: Response) => {
          return heroes.json();
        }
      );
  }


}
