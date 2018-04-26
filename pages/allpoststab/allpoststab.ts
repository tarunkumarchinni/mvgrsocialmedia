import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Allposts } from '../allposts/allposts';
import { Chats } from '../chats/chats';
import { Newsfeed } from '../newsfeed/newsfeed';

@Component({
  selector: 'page-allpoststab',
  templateUrl: 'allpoststab.html',
})
export class Allpoststab {
  tab1=Allposts;
  tab2=Newsfeed;
  tab3 = Chats;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Allpoststab');
  }

}
