
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase, { firestore, database } from 'firebase';
import { Events, AlertController } from 'ionic-angular';

/*
  Generated class for the User provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class User { 
  bun: any;
   /*updateimage(arg0: any): any {
    throw new Error("Method not implemented.");
  }*/
  uiddata:any;
  buddyposts = [];
  firestore = firebase.storage();
  firedata = firebase.database().ref('/chatusers');
  firedata1 = firebase.database().ref('/newposts');
  
    constructor(public afireauth: AngularFireAuth,public events: Events,public alertCtrl: AlertController) {
  }
  
  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: newuser.displayName,
        
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: newuser.displayName,
            mobile: newuser.mobile,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })

          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        //reject(err);
        let alert = this.alertCtrl.create({
          title: 'Details wrongly entered',
          subTitle: err,
          buttons: ['Dismiss']
        });
        alert.present();
      })
    })
    return promise;
  }
  passwordreset(email) {
    var promise = new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        resolve({ success: true });
      }).catch((err) => {
        //reject(err);
        let alert = this.alertCtrl.create({
          title: 'Wrong Email',
          subTitle: err,
          buttons: ['Dismiss']
        });
        alert.present();
      })
    })
    
    return promise;
  }

  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        this.afireauth.auth.currentUser.updateProfile({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
//for chatusers
                firebase.database().ref('/chatusers/' + firebase.auth().currentUser.uid).update({
                  displayName: this.afireauth.auth.currentUser.displayName,
                  photoURL: imageurl,
                  
                  uid: firebase.auth().currentUser.uid
                  }).then(() => {
                      resolve({ success: true });
                      }).catch((err) => {
                          reject(err);
                      })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}

updatedisplayname(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName: newname,
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      displayName: newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatemobilenumber(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName:this.afireauth.auth.currentUser.displayName,
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      
      mobile:newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}


getuserdetails() {
  var promise = new Promise((resolve, reject) => {
  this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

getallusers() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('uid').once('value', (snapshot) => {
      let userdata = snapshot.val();
      let temparr = [];
      for (var key in userdata) {
        temparr.push(userdata[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}
//for posting
/*updateimagepost(imageurl) {
  var promise = new Promise((resolve, reject) => {
    
        this.firestore.ref('/postingpic').child(firebase.auth().currentUser.uid).child('postingpic' + uuid);
          //firebase.database().ref('/postingpic/' + firebase.auth().currentUser.uid).child(firebase.auth().currentUser.uid)/*.update({
         
              resolve({ success: true });
           
  })
  return promise;
}*/

guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//for adding post
addpost(newpost,uuid){
  var promise = new Promise((resolve, reject) => {
    //var uid =this.guid();

   // this.firedata1.child(this.afireauth.auth.currentUser.uid).child(uid).set({
    this.firedata1.push({
      uid: this.afireauth.auth.currentUser.uid,
      displayName:this.afireauth.auth.currentUser.displayName,
      posttitle: newpost.posttitle,
      postmessage:newpost.postmessage,
      profileURL:this.afireauth.auth.currentUser.photoURL,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      photoURL:  uuid,
     
        
    }).then(() => {
      resolve({ success: true });
      })//.catch((err) => {
       // reject(err);
    //})
})
  return promise;

}
//updating the image url method
updateimagepostingurl(imageurl) {
  var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.currentUser.updateProfile({
          displayName: this.afireauth.auth.currentUser.displayName,
          photoURL: imageurl      
      }).then(() => {
          firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            
          displayName: this.afireauth.auth.currentUser.displayName,
          photoURL: imageurl,
          uid: firebase.auth().currentUser.uid
          }).then(() => {
              resolve({ success: true });
              }).catch((err) => {
                  reject(err);
              })
      }).catch((err) => {
            reject(err);
         })  
  })
  return promise;
}
//get the posting uid

//get the details of posts of all users
getdetailsofallposts(){
  var promise = new Promise((resolve, reject) => {

  let temp;
    this.firedata1.on('value', (snapshot) => {
      this.buddyposts = [];
      temp = snapshot.val();
      for (var tempkey in temp) {
        this.buddyposts.push(temp[tempkey]);
      }
      this.events.publish('newpostings');
    })

})
return promise;
}


//for update the likes

}
