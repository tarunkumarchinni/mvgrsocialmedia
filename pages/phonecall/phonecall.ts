
import { Component } from '@angular/core';
import { CallNumber} from '@ionic-native/call-number';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-phonecall',
  templateUrl: 'phonecall.html',
})
export class Phonecall {

  phoneNumber:number;
  constructor(private call: CallNumber) {

  }

  async callNumber():Promise<any>{
     try{
       await this.call.callNumber(String(this.phoneNumber),true);
     }
     catch(e){
       console.error(e);
     }
  }

}
