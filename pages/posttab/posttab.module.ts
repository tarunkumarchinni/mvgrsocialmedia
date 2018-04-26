import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Posttab } from './posttab';

@NgModule({
  declarations: [
    Posttab,
  ],
  imports: [
    IonicPageModule.forChild(Posttab),
  ],
})
export class PosttabModule {}
