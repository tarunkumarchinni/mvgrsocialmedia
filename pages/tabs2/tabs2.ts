import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Weatherhome } from '../weatherhome/weatherhome';
import { Weatherabout } from '../weatherabout/weatherabout';
import { Weathersettings } from '../weathersettings/weathersettings';

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2 {
  tab1Root = Weatherhome;
  tab2Root = Weatherabout;
  tab3Root = Weathersettings;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs2');
  }

  
}
