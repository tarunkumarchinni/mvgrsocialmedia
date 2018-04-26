import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercred';

import { Auth } from '../../providers/auth/auth';

import { Tabs } from '../tabs/tabs';
import { Signup } from '../signup/signup';
import { Passwordreset } from '../passwordreset/passwordreset';
import { Allpoststab } from '../allpoststab/allpoststab';
import { Loginfail } from '../loginfail/loginfail';



@IonicPage()


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
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
export class Login {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
 
 credentials ={} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public authservice: Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signin(){
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot(Allpoststab);     //Tabs
      else{
     
        alert(res);
      // this.navCtrl.push(Loginfail);
    }
    })
  }
 
   
  signup() {
    this.navCtrl.push(Signup);
  }
  passwordreset() {
    this.navCtrl.push(Passwordreset);
  }

}
