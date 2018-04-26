import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newgroup } from './newgroup';

@NgModule({
  declarations: [
    Newgroup,
  ],
  imports: [
    IonicPageModule.forChild(Newgroup),
  ],
})
export class NewgroupModule {}
