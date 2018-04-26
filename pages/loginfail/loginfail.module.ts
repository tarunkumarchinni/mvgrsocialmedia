import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Loginfail } from './loginfail';

@NgModule({
  declarations: [
    Loginfail,
  ],
  imports: [
    IonicPageModule.forChild(Loginfail),
  ],
})
export class LoginfailModule {}
