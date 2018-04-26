import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Weatherabout } from './weatherabout';

@NgModule({
  declarations: [
    Weatherabout,
  ],
  imports: [
    IonicPageModule.forChild(Weatherabout),
  ],
})
export class WeatheraboutModule {}
