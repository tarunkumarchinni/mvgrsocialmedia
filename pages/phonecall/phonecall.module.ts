import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Phonecall } from './phonecall';

@NgModule({
  declarations: [
    Phonecall,
  ],
  imports: [
    IonicPageModule.forChild(Phonecall),
  ],
})
export class PhonecallModule {}
