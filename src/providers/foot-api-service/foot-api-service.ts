import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the FootApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
import { FootApiCmpGlobal } from '../../models/footapi-cmp-global.model';

@Injectable()
export class FootApiServiceProvider {

  private baseUrl: string = 'http://api.football-data.org/v1/';

  constructor(public http: Http) {
    console.log('Hello FootApiServiceProvider Provider');
  }

  public getCompetions(): Promise<FootApiCmpGlobal>{
    const url = `$(this.baseUrl)competitions`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as FootApiCmpGlobal)
      .catch(error => console.log("Error: " + error))

  }

}
