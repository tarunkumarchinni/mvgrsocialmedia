import { Component,NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Imghandler } from '../../providers/imghandler/imghandler';
import { User } from '../../providers/user/user';
import { Toast } from 'ionic-angular/components/toast/toast';
import { Tabs } from '../tabs/tabs';
import { Profile } from '../profile/profile';
import { Allposts } from '../allposts/allposts';

@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class Newsfeed {
  newpost = {
    displayname:'',
    posttitle:'',
    postmessage:'',
    photourl:'',
    profileurl:'',
   
  }
  url:string;
  uid:any;
  nativepath: any;
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/todo-4469d.appspot.com/o/background%20color%20of%20post.jpg?alt=media&token=7afd1c34-a047-4141-b9da-dc614459b21a';//'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';

  moveon=true;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController, public userservice: User,public alertCtrl: AlertController, public loadingCtrl: LoadingController,public navParams: NavParams,public zone: NgZone,public imgservice:Imghandler) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newsfeed');
  }
    
  choosepicture(){
    this.imgservice.uploadimagepost().then((uploadedurl: any) => {
      
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    
    })
   // return this.imgurl;
  }
  // url =this.imgurl;
  postcomment(imgurl){
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    /*let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();*/
    //this.imgservice.uploadimagepost().then((url: any) => {
     
   
  this.userservice.addpost(this.newpost,this.imgurl).then((res:any)=>{
    //this.navCtrl.push(Profile);
   // this.imgservice.updateimagepost(this.imgurl).then((res: any) => {
      
    //loader.dismiss();
      if (res.success) {
        this.navCtrl.push(Allposts);
        toaster.setMessage('updated successfully..');
        toaster.present();
      }
      else {
        alert(res);
      
      }
   // })
   
 

  })
  
 // })
  }

  

}
