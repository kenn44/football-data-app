import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FootApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FootApiServiceProvider {

  private baseUrl: string = 'http://api.football-data.org/v1/';

  constructor(public http: Http) {
    console.log('Hello FootApiServiceProvider Provider');
  }

  public getCompetions(){

  }

}
