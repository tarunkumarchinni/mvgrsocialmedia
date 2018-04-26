import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, Events } from 'ionic-angular';
import { Groupsprovider } from '../../providers/groupsprovider/groupsprovider';
import { Newgroup } from '../newgroup/newgroup';
import { Groupchat } from '../groupchat/groupchat';


@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class Groups {

  allmygroups;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
              public loadingCtrl: LoadingController, public groupservice: Groupsprovider) {
  }

  
  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: 'Getting your groups, Please wait...'
    });
    loader.present();
    this.groupservice.getmygroups();
    loader.dismiss();
    this.events.subscribe('allmygroups', () => {
      this.allmygroups = this.groupservice.mygroups;
    })
  }
  
  ionViewDidLeave() {
    this.events.unsubscribe('allmygroups');
  }
 
  addgroup() {
    this.navCtrl.push(Newgroup);
  }

  
  openchat(group) {
    this.groupservice.getintogroup(group.groupName);
    this.navCtrl.push(Groupchat, { groupName: group.groupName });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groups');
  }

}
