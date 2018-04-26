import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Events, Content, LoadingController } from 'ionic-angular';
import { Chat } from '../../providers/chat/chat';
import firebase from 'firebase';
import { Imghandler } from '../../providers/imghandler/imghandler';




@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class Buddychat {

  @ViewChild('content') content: Content;
  buddy: any;
  newmessage;
  allmessages = [];
  photoURL;
  imgornot;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: Chat,
    public events: Events, public zone: NgZone, public loadingCtrl: LoadingController,
    public imgstore: Imghandler) {
    this.buddy = this.chatservice.buddy;
    
    this.photoURL = firebase.auth().currentUser.photoURL;
    
    

    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.imgornot = [];
      this.zone.run(() => {
        this.allmessages = this.chatservice.buddymessages;
        for (var key in this.allmessages) {
          var d = new Date(this.allmessages[key].timestamp);
          var hours = d.getHours();
          var minutes = "0" + d.getMinutes();
          var month = d.getMonth();
          var da = d.getDate();
          
          var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
          var formattedTime = monthNames[month] + "-" + da + "-" + hours + ":" + minutes.substr(-2);
   
          this.allmessages[key].timestamp = formattedTime;
          if (this.allmessages[key].message.substring(0, 4) == 'http')
            this.imgornot.push(true);
          else
            this.imgornot.push(false);
        }
      this.scrollto();
      })
    })
   // this.scrollto();
  }

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Buddychat');
  }
  addmessage() {
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      this.content.scrollToBottom();
      this.newmessage = '';
    })
  }
  ionViewDidEnter(){
    this.chatservice.getbuddymessages();
  }

  sendPicMsg() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.imgstore.picmsgstore().then((imgurl) => {
      loader.dismiss();
      this.chatservice.addnewmessage(imgurl).then(() => {
        this.scrollto();
        this.newmessage = '';
      })
    }).catch((err) => {
      alert(err);
      loader.dismiss();
    })
  }


}
