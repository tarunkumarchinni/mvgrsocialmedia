import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';
import { Groupsprovider } from '../../providers/groupsprovider/groupsprovider';


@IonicPage()
@Component({
  selector: 'page-groupinfo',
  templateUrl: 'groupinfo.html',
})
export class Groupinfo {

  groupmembers;
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupservice: Groupsprovider,
              public events: Events) {
  }
 
  ionViewDidLoad() {
    this.groupservice.getownership(this.groupservice.currentgroupname).then((res) => {
      if (res)
        this.groupmembers = this.groupservice.currentgroup;
      else {
        this.groupservice.getgroupmembers();
      }
        
    })
 
    this.events.subscribe('gotmembers', () => {
      this.groupmembers = this.groupservice.currentgroup;
    })
    
  }
 
  ionViewWillLeave() {
    this.events.unsubscribe('gotmembers');
  }

 

}
