import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Weatherhome } from '../weatherhome/weatherhome';
@IonicPage()
@Component({
  selector: 'page-weathersettings',
  templateUrl: 'weathersettings.html',
})
export class Weathersettings {

  city: string;
state: string;
  

constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private storage:Storage) {

   this.storage.get('location').then((val) => {
     if(val != null){
       let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
     } else {
       this.city = 'Visakhapatnam';
       this.state = 'AP';
     }
   });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(Weatherhome);
  }


}
