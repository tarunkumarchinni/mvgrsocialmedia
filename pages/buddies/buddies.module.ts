import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buddies } from './buddies';

@NgModule({
  declarations: [
    Buddies,
  ],
  imports: [
    IonicPageModule.forChild(Buddies),
  ],
})
export class BuddiesModule {}
