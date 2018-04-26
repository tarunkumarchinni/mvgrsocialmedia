import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { Newsfeed } from '../pages/newsfeed/newsfeed';
import { Chats } from '../pages/chats/chats';
import { Profile } from '../pages/profile/profile';
import { Allposts } from '../pages/allposts/allposts';
import { Groups } from '../pages/groups/groups';
import { Buddies } from '../pages/buddies/buddies';
import { Passwordreset } from '../pages/passwordreset/passwordreset';
import { Imghandler } from '../providers/imghandler/imghandler';
import { User } from '../providers/user/user';
import { Phonecall } from '../pages/phonecall/phonecall';
import { Tabs2 } from '../pages/tabs2/tabs2';
import { Weatherhome } from '../pages/weatherhome/weatherhome';
import { Tabs } from '../pages/tabs/tabs';
import { Profiletab } from '../pages/profiletab/profiletab';
import { Groupstab } from '../pages/groupstab/groupstab';
import { Posttab } from '../pages/posttab/posttab';
import { Searchbuddiestab } from '../pages/searchbuddiestab/searchbuddiestab';
import { Allpoststab } from '../pages/allpoststab/allpoststab';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  rootPage:any = Login;
  avatar: any;
  displayName: string;
  mobile: string;
  pages:Array<{title:string, component:any}>;
  showSplash = true;
  constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen,public userservice: User, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: Imghandler) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(2000).subscribe(()=>this.showSplash=false)

    });
    this.pages=[
        { title:'Home',component: Allpoststab },
       
        { title:'Chat',component: Tabs },
        { title:'Groups',component: Groupstab },
        { title:'Profile',component: Profiletab },
       
        { title:'SearchBuddies',component: Searchbuddiestab },
        { title:'Send Post',component: Posttab },
        
        { title:'Weather',component: Tabs2 },
        { title:'Make A Call',component: Phonecall },
        { title:'Change Password',component: Passwordreset },
        { title:'Logout',component: Login }
         
        
    ];
  }
  openPage(page){
    if(page==='Logout'){
      firebase.auth().signOut().then(() => {
        this.nav.parent.parent.setRoot(Login);
      })
    }
    else{
        this.nav.setRoot(page.component);
    }
  }

 /* ionViewWillEnter() {
    this.loaduserdetails();
  }*/

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
            this.userservice.updatedisplayname(data.mobile).then((res: any) => {
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

}
/*http://themocracy.com/wp-content/uploads/2016/07/Tech.png*/
