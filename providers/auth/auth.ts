
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercred';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Auth provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Auth {

  constructor(public afireauth: AngularFireAuth,public alertCtrl: AlertController) {
    console.log('Hello Auth Provider');
  }
  /*
    For logging in a particular user. Called from the login.ts file.
  
*/  
  
login(credentials: usercreds) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
      resolve(true);
    }).catch((err) => {
      //reject(err);
      let alert = this.alertCtrl.create({
        title: 'Wrong Credentials',
        subTitle: err,
        buttons: ['Dismiss']
      });
      alert.present();
     })
  })

  return promise;
  
}

}
