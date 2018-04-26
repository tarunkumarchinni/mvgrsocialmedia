import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newsfeed } from './newsfeed';

@NgModule({
  declarations: [
    Newsfeed,
  ],
  imports: [
    IonicPageModule.forChild(Newsfeed),
  ],
})
export class NewsfeedModule {}
