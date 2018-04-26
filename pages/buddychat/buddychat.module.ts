import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buddychat } from './buddychat';

@NgModule({
  declarations: [
    Buddychat,
  ],
  imports: [
    IonicPageModule.forChild(Buddychat),
  ],
})
export class BuddychatModule {}
