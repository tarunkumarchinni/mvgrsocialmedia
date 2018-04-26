import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';
import { Groupsprovider } from '../../providers/groupsprovider/groupsprovider';


@IonicPage()
@Component({
  selector: 'page-groupmembers',
  templateUrl: 'groupmembers.html',
})
export class Groupmembers {
  groupmembers;
  tempgrpmembers;
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupservice: Groupsprovider,
              public events: Events) {
  }
 
  ionViewWillEnter() {
    this.groupmembers = this.groupservice.currentgroup;
    this.tempgrpmembers = this.groupmembers;
    this.events.subscribe('gotintogroup', () => {
      this.groupmembers = this.groupservice.currentgroup;
      this.tempgrpmembers = this.groupmembers;
    })
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupmembers');
  }

  ionViewWillLeave() {
    this.events.unsubscribe('gotintogroups');
  }
 
  searchuser(searchbar) {
    let tempmembers = this.tempgrpmembers;
 
    var q = searchbar.target.value;
 
    if (q.trim() === '') {
      this.groupmembers = this.tempgrpmembers;
      return;
    }
 
    tempmembers = tempmembers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
    
    this.groupmembers = tempmembers;
 
  }
 
  removemember(member) {
    this.groupservice.deletemember(member);
  }

}
