import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Weather provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Weather {

  apikey = '99dfe35fcb7de1ee';
  url;
  
    constructor(public http: Http) {
      console.log('Hello WeatherProvider Provider');
      this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }
  
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res.json());
  
  }

}
