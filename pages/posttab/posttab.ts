import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Newsfeed } from '../newsfeed/newsfeed';
import { Allposts } from '../allposts/allposts';
import { Buddies } from '../buddies/buddies';

@Component({
  selector: 'page-posttab',
  templateUrl: 'posttab.html',
})
export class Posttab {
  tab1=Newsfeed;
  tab2=Allposts;
  tab3 = Buddies;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Posttab');
  }

}
