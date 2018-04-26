import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { Imghandler } from '../../providers/imghandler/imghandler';
import firebase from 'firebase';
import { Login } from '../login/login';
import { Newsfeed } from '../newsfeed/newsfeed';
import { Allposts } from '../allposts/allposts';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  avatar: string;
  displayName: string;
  mobile: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: User, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: Imghandler) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.mobile=res.mobile;
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = firebase.auth().currentUser.photoURL;
      })
    })
  }
  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed');
          statusalert.present();
      })
      })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
 
        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }
 
              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }
  editmobile() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Mobile number',
      inputs: [{
        name: 'mobile',
        placeholder: 'mobile'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
 
        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.mobile) {
            this.userservice.updatemobilenumber(data.mobile).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your mobile number has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.mobile = data.mobile;
                })
              }
 
              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your mobile number was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.parent.parent.setRoot(Login);
    })
  }
  post(){
    this.navCtrl.push(Newsfeed);
  }
  allpost(){
    this.navCtrl.push(Allposts);
  }
}
