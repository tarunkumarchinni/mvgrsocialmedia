import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groupinfo } from './groupinfo';

@NgModule({
  declarations: [
    Groupinfo,
  ],
  imports: [
    IonicPageModule.forChild(Groupinfo),
  ],
})
export class GroupinfoModule {}
