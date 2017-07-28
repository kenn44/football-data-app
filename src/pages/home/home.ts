import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FootApiServiceProvider } from '../../providers/foot-api-service/foot-api-service';
import { FootApiCmpGlobal } from '../../models/footapi-cmp-global.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foot: FootApiCmpGlobal = new FootApiCmpGlobal();

  /*constructor(public navCtrl: NavController, private footApiServiceProvider: FootApiServiceProvider) {
    this.footApiServiceProvider.getCompetions()
      .then(cmpsFetched => {
        this.foot = cmpsFetched;
        console.log(this.foot)
      });

  }*/

  constructor(public navCtrl: NavController, private footApiServiceProvider: FootApiServiceProvider) {
    this.getCompetions(null);
  }

  public getCompetions(refresher) {
    this.footApiServiceProvider.getCompetions()
      .then(cmpsFetched => {
        this.foot = cmpsFetched;
        console.log(this.foot);
        console.log(this.foot[1].id);

        (refresher) ? refresher.complete() : null;
        console.log('Data retrieved from server !');
      });
  }

}
