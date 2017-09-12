import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Hero } from '../hero';


@Injectable()
export class HeroService{

  constructor (private http: Http) {}

  getHeroes (): Observable<Hero[]> {
    return this.http.get(`/api/heroes`)
      .map(this.parseData)
      .catch(this.handleError);
  }
  private parseData(res: Response)  {
    console.log(res);
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

}
