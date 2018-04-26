import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Weathersettings } from './weathersettings';

@NgModule({
  declarations: [
    Weathersettings,
  ],
  imports: [
    IonicPageModule.forChild(Weathersettings),
  ],
})
export class WeathersettingsModule {}
