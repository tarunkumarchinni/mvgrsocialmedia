import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groups } from './groups';

@NgModule({
  declarations: [
    Groups,
  ],
  imports: [
    IonicPageModule.forChild(Groups),
  ],
})
export class GroupsModule {}
