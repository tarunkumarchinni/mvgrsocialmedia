import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groupstab } from './groupstab';

@NgModule({
  declarations: [
    Groupstab,
  ],
  imports: [
    IonicPageModule.forChild(Groupstab),
  ],
})
export class GroupstabModule {}
