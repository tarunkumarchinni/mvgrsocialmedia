import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Allposts } from './allposts';

@NgModule({
  declarations: [
    Allposts,
  ],
  imports: [
    IonicPageModule.forChild(Allposts),
  ],
})
export class AllpostsModule {}
