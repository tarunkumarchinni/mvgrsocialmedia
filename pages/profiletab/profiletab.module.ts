import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profiletab } from './profiletab';

@NgModule({
  declarations: [
    Profiletab,
  ],
  imports: [
    IonicPageModule.forChild(Profiletab),
  ],
})
export class ProfiletabModule {}
