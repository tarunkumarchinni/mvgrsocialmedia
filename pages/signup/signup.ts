import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { Login } from '../login/login';
//import { Profilepic } from '../profilepic/profilepic';
import { Profile } from '../profile/profile';
import { Profilepic } from '../profilepic/profilepic';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
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
export class Signup {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  newuser = {
    email: '',
    password: '',
    displayName: '',
    mobile:''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: User,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == ''|| this.newuser.mobile == '') {
      toaster.setMessage('All fields are required');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else if(this.newuser.mobile.length!=10){
      toaster.setMessage('wrong mobile number');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.success)
          this.navCtrl.push(Profilepic);
        else
          alert('Error' + res);
      })
    }
  }  

  goback() {
    this.navCtrl.setRoot(Login);
  }

}
