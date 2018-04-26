import { Component,NgZone } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { Imghandler } from '../../providers/imghandler/imghandler';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

import { FilePath } from '@ionic-native/file-path';
import { Tabs } from '../tabs/tabs';
import { Chats } from '../chats/chats';


@IonicPage()
@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class Profilepic {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: Imghandler,
    public zone: NgZone, public userservice: User,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }
 

  ionViewDidLoad() {
   // console.log('ionViewDidLoad Profilepic');
  }
  chooseimage() {
    
    
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
   
    
  }
 
  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot(Tabs);
      }
      else {
        alert(res);
      }
    })
  }
 
  proceed() {
    this.navCtrl.setRoot(Tabs);
  }

}
