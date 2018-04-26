import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Weatherhome } from './weatherhome';

@NgModule({
  declarations: [
    Weatherhome,
  ],
  imports: [
    IonicPageModule.forChild(Weatherhome),
  ],
})
export class WeatherhomeModule {}
