import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { Imghandler } from '../../providers/imghandler/imghandler';
import { Groupsprovider } from '../../providers/groupsprovider/groupsprovider';


@IonicPage()
@Component({
  selector: 'page-newgroup',
  templateUrl: 'newgroup.html',
})
export class Newgroup {

  newgroup = {
    groupName: 'GroupName',
    groupPic: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public groupservice: Groupsprovider, public imghandler: Imghandler,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newgroup');
  }

  chooseimage() {
    if (this.newgroup.groupName == 'GroupName') {
      let namealert = this.alertCtrl.create({
        buttons: ['okay'],
        message: 'Please enter the groupname first. Thanks'
      });
      namealert.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Loading, please wait..'
      });
      loader.present();
      this.imghandler.grouppicstore(this.newgroup.groupName).then((res: any) => {
        loader.dismiss();
        if(res)
          this.newgroup.groupPic = res;  
      }).catch((err) => {
        alert(err);
      })
    }
    
  }

  creategroup() {
    this.groupservice.addgroup(this.newgroup).then(() => {
      this.navCtrl.pop();
    }).catch((err) => {
      alert(JSON.stringify(err));
    })
  }
 
  editgroupname() {
    let alert = this.alertCtrl.create({
      title: 'Edit Group Name',
      inputs: [{
        name: 'groupname',
        placeholder: 'Give a new groupname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
 
        }
      },
      {
        text: 'Set',
        handler: data => {
          if (data.groupname) {
            this.newgroup.groupName = data.groupname
          }
 
          else {
            this.newgroup.groupName = 'groupName';
          }
        }
      }
      ]
    });
    alert.present();
  }
 


}
