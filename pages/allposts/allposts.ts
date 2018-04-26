import { Component,NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams, AlertController, Content,Events } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { Imghandler } from '../../providers/imghandler/imghandler';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase, { firestore, database } from 'firebase';

@Component({
  selector: 'page-allposts',
  templateUrl: 'allposts.html',
 
 
})
export class Allposts {
  @ViewChild('content') content: Content;
  avatar;
  displayName: string;
  mobile: string;
  posttitle:string;
  postmessage:string;
  uid:string;
  timestamp:string;
  profileurl;
  like=3;
  dislike=0;
 buddy:any;
 photoURL;

 allposts= [];
 imgornot;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: User, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: Imghandler,public events: Events) {
     // this.getdetailsofallposts();
     this.buddy = this.userservice.afireauth.auth.currentUser.uid;
    
    this.photoURL = this.userservice.afireauth.auth.currentUser.photoURL;
    
    

    this.events.subscribe('newpostings', () => {
      this.allposts = [];
      this.imgornot = [];
      this.zone.run(() => {
        this.allposts = this.userservice.buddyposts.reverse();
        for (var key in this.allposts) {
          var d = new Date(this.allposts[key].timestamp);
          var hours = d.getHours();
          var minutes = "0" + d.getMinutes();
          var month = d.getMonth();
          var da = d.getDate();
          
          var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
          var formattedTime = monthNames[month] + "-" + da + "-" + hours + ":" + minutes.substr(-2);
   
          this.allposts[key].timestamp = formattedTime;
          if(this.allposts[key].photoURL === 'https://firebasestorage.googleapis.com/v0/b/todo-4469d.appspot.com/o/background%20color%20of%20post.jpg?alt=media&token=7afd1c34-a047-4141-b9da-dc614459b21a'){
            this.imgornot.push(false);
          }
          else{
            this.imgornot.push(true);
          }
        }
      //this.scrollto();
      })
    })
   // this.scrollto();
  }

  

      
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad Allposts');
  }
  ionViewDidEnter(){
    this.userservice.getdetailsofallposts().then((res: any) => {
      //console.log(res);
     /* this.displayName = res.displayName;
      this.posttitle = res.posttitle;
      this.postmessage = res.postmessage;
      this.uid=res.uid;
      this.timestamp=res.timestamp;
      this.zone.run(() => {
        this.profileurl=res.profileURL;
        this.avatar = res.photoURL;
      })*/
      //this.allposts=res;
    })
   
    
   
  }
  
  getlike(){
    return this.like=this.like+1;
  }

  getdislike(){
    
      return this.dislike=this.dislike+1;
   
  }

}
