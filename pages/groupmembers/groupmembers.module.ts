import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groupmembers } from './groupmembers';

@NgModule({
  declarations: [
    Groupmembers,
  ],
  imports: [
    IonicPageModule.forChild(Groupmembers),
  ],
})
export class GroupmembersModule {}
