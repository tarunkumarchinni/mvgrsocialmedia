import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { Chats } from '../chats/chats';
import { Groups } from '../groups/groups';

@Component({
  selector: 'page-profiletab',
  templateUrl: 'profiletab.html',
})
export class Profiletab {
  tab1=Profile;
  tab2=Chats;
  tab3 = Groups;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profiletab');
  }

}
