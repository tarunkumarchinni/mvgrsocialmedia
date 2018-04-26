import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Weather } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-weatherhome',
  templateUrl: 'weatherhome.html',
})
export class Weatherhome {

  

  weather:any;
  location:{
    city:string,
    state:string
   
  }
    
  
  constructor(
    public navCtrl: NavController, 
    private weatherProvider:Weather,
  private storage:Storage) {
  
    }
    
    ionViewWillEnter(){
     this.storage.get('location').then((val) => {
        if(val != null){
              this.location = JSON.parse(val);
       } else {
          this.location = {
            city: 'Visakhapatnam',
            state: 'AP'
        }
      }
  
      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => { 
           this.weather = weather.current_observation;
       });
   });
    }
  
}
