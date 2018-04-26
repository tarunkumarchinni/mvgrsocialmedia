import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profilepic } from './profilepic';

@NgModule({
  declarations: [
    Profilepic,
  ],
  imports: [
    IonicPageModule.forChild(Profilepic),
  ],
})
export class ProfilepicModule {}
