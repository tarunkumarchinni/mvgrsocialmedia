import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chats } from '../chats/chats';
import { Groups } from '../groups/groups';
import { Profile } from '../profile/profile';

@Component({
  selector: 'page-groupstab',
  templateUrl: 'groupstab.html',
})
export class Groupstab {
  tab1=Groups;
  tab2=Chats;
  tab3 = Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupstab');
  }

}
