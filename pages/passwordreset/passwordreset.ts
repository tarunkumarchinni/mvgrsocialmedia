import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { Login } from '../login/login';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
  //
  animations: [
 
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
 
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),
 
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
  //
})
export class Passwordreset {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
 
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userservice: User, public alertCtrl: AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Passwordreset');
  }
  reset() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
    this.userservice.passwordreset(this.email).then((res: any) => {
      if (res.success) {
       // alert.setTitle('Email Sent');
       // alert.setSubTitle('Please follow the instructions in the email to reset your password');
        toaster.setMessage('Email Sent');
        toaster.setMessage('Please follow the instructions in the email to reset your password');
        toaster.present();
        this.navCtrl.setRoot(Login);
      }
      else {
        //alert.setTitle('Failed');
        toaster.setMessage('Failed due to unregistered email !!');
        
        toaster.present();
        this.navCtrl.setRoot(Passwordreset);
      }
    })
  }
 
  goback() {
    this.navCtrl.setRoot(Login);
  }

}
