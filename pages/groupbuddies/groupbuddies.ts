import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';
import { Groupsprovider } from '../../providers/groupsprovider/groupsprovider';
import { Requests } from '../../providers/requests/requests';


@IonicPage()
@Component({
  selector: 'page-groupbuddies',
  templateUrl: 'groupbuddies.html',
})
export class Groupbuddies {

  myfriends = [];
  groupmembers = [];
  searchstring;
  tempmyfriends = [];
  newbuddy;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestservice: Requests,
              public events: Events, public groupservice: Groupsprovider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupbuddies');
  }

  ionViewWillEnter() {
    this.requestservice.getmyfriends();
    this.events.subscribe('gotintogroup', () => {
      this.myfriends.splice(this.myfriends.indexOf(this.newbuddy.uid), 1);
      this.tempmyfriends = this.myfriends;
    })
    this.events.subscribe('friends', () => {
      
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends;
      this.groupmembers = this.groupservice.currentgroup;
      for (var key in this.groupmembers)
        for (var friend in this.myfriends) {
          if (this.groupmembers[key].uid === this.myfriends[friend].uid)
            this.myfriends.splice(this.myfriends.indexOf(this.myfriends[friend]), 1);
        }
      this.tempmyfriends = this.myfriends;
    })
  }

  searchuser(searchbar) {
    let tempfriends = this.tempmyfriends;
 
    var q = searchbar.target.value;
 
    if (q.trim() === '') {
      this.myfriends = this.tempmyfriends;
      return;
    }
 
    tempfriends = tempfriends.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
    
    this.myfriends = tempfriends;
 
  }
 
  addbuddy(buddy) {
    this.newbuddy = buddy;
    this.groupservice.addmember(buddy);
  }

}
