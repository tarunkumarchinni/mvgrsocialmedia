import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Buddies } from '../buddies/buddies';
import { Allposts } from '../allposts/allposts';
import { Chats } from '../chats/chats';

@Component({
  selector: 'page-searchbuddiestab',
  templateUrl: 'searchbuddiestab.html',
})
export class Searchbuddiestab {
  tab1=Buddies;
  tab2=Chats;
  tab3 = Allposts;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Searchbuddiestab');
  }

}
