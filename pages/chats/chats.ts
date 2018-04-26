import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events, AlertController } from 'ionic-angular';
import { Buddies } from '../buddies/buddies';
import { Requests } from '../../providers/requests/requests';
import { Buddychat } from '../buddychat/buddychat';
import { Chat } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class Chats {
  myfriends;
  myrequests;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestservice: Requests,
    public events: Events, public alertCtrl: AlertController, public chatservice: Chat ) {
}
 
 
  /*ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
  }*/

  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends; 
    })
  }
 
  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
  }
 
  addbuddy() {
    this.navCtrl.push(Buddies);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chats');
  }

  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {

      let newalert = this.alertCtrl.create({
        title: 'Friend added',
        subTitle: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }

  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {
       alert('Request ignored');
    }).catch((err) => {
      alert(err);
    })
  }

  buddychat(buddy) {
    this.chatservice.initializebuddy(buddy);
    this.navCtrl.push(Buddychat);
  }

  
  

}
