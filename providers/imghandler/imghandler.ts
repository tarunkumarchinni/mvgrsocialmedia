
import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { AngularFireAuth } from 'angularfire2/auth';
import { FilePath } from '@ionic-native/file-path';
import * as firebase from 'firebase';

/*
  Generated class for the Imghandler provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Imghandler {
  afireauth: any;
  firestore = firebase.storage();
  firedata = firebase.database().ref('/newposts');
  nativepath: any;
  
  constructor(public filechooser: FileChooser) {
  }

  uploadimage() {
    var promise = new Promise((resolve, reject) => {
        this.filechooser.open().then((url) => {
          (<any>window).FilePath.resolveNativePath(url, (result) => {
            this.nativepath = result;
            (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
              res.file((resFile) => {
                var reader = new FileReader();
                reader.readAsArrayBuffer(resFile);
                reader.onloadend = (evt: any) => {
                  var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                  var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
                  imageStore.put(imgBlob).then((res) => {
                    this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).getDownloadURL().then((url) => {
                      resolve(url);
                    }).catch((err) => {
                        reject(err);
                    })
                  }).catch((err) => {
                    reject(err);
                  })
                }
              })
            })
          })
      })
    })    
     return promise;   
  }

  picmsgstore() {
    var promise = new Promise((resolve, reject) => {
        this.filechooser.open().then((url) => {
          (<any>window).FilePath.resolveNativePath(url, (result) => {
            this.nativepath = result;
            (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
              res.file((resFile) => {
                var reader = new FileReader();
                reader.readAsArrayBuffer(resFile);
                reader.onloadend = (evt: any) => {
                  var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                  var uuid = this.guid();
                  var imageStore = this.firestore.ref('/picmsgs').child(firebase.auth().currentUser.uid).child('picmsg' + uuid);
                  imageStore.put(imgBlob).then((res) => {
                      resolve(res.downloadURL);
                    }).catch((err) => {
                        reject(err);
                    })
                  .catch((err) => {
                    reject(err);
                  })
                }
              })
            })
          })
      })
    })    
     return promise;   
  }

  guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

grouppicstore(groupname) {
  var promise = new Promise((resolve, reject) => {
      this.filechooser.open().then((url) => {
        (<any>window).FilePath.resolveNativePath(url, (result) => {
          this.nativepath = result;
          (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
            res.file((resFile) => {
              var reader = new FileReader();
              reader.readAsArrayBuffer(resFile);
              reader.onloadend = (evt: any) => {
                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                var imageStore = this.firestore.ref('/groupimages').child(firebase.auth().currentUser.uid).child(groupname);
                imageStore.put(imgBlob).then((res) => {
                  this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).child(groupname).getDownloadURL().then((url) => {
                    resolve(url);
                  }).catch((err) => {
                      reject(err);
                  })
                }).catch((err) => {
                  reject(err);
                })
              }
            })
          })
        })
    })
  })    
   return promise;   
}
//for postings
uploadimagepost() {
  var promise = new Promise((resolve, reject) => {
      this.filechooser.open().then((url) => {
        (<any>window).FilePath.resolveNativePath(url, (result) => {
          this.nativepath = result;
          (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
            res.file((resFile) => {
              var reader = new FileReader();
              reader.readAsArrayBuffer(resFile);
              reader.onloadend = (evt: any) => {
                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                var uuid = this.guid();
                var imageStore = this.firestore.ref('/postingpic').child(firebase.auth().currentUser.uid).child('postingpic' + uuid);
                imageStore.put(imgBlob).then((res) => {
                  this.firestore.ref('/postingpic').child(firebase.auth().currentUser.uid).child('postingpic' + uuid).getDownloadURL().then((url) => {
                    resolve(url);
                  }).catch((err) => {
                      reject(err);
                  })
                }).catch((err) => {
                  reject(err);
                })
              }
            })
          })
        })
    })
  })    
   return promise;   
}



updateimagepost(imageurl) {
  var promise = new Promise((resolve, reject) => {  //actual
      this.afireauth.auth.currentUser.updateProfile({
          displayName: this.afireauth.auth.currentUser.displayName,
          photoURL: imageurl      
      }).then(() => {
        var uuid = this.guid();//actual
        this.firestore.ref('/postingpic').child(firebase.auth().currentUser.uid).child('postingpic' + uuid);//actual
          firebase.database().ref('/newposts/' + firebase.auth().currentUser.uid).update({
          displayName: this.afireauth.auth.currentUser.displayName,
          photoURL: imageurl,
          uid: firebase.auth().currentUser.uid
          }).then(() => {
              resolve({ success: true });  //actual
              }).catch((err) => {
                  reject(err);
              })
      }).catch((err) => {
            reject(err);
         }) 
        // return uuid;
  })
  return promise;
  
}
}