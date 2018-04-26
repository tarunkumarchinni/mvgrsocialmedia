import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { config } from './app.firebaseconfig';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
//import{MediaPlugin} from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Tabs } from '../pages/tabs/tabs';
import { Auth } from '../providers/auth/auth';
import { User } from '../providers/user/user';
import { Chats } from '../pages/chats/chats';
import { Profile } from '../pages/profile/profile';
import { Groups } from '../pages/groups/groups';

//import { Profilepic } from '../pages/profilepic/Profilepic';
import { Signup } from '../pages/signup/signup';
import { Profilepic } from '../pages/profilepic/profilepic';
import { Passwordreset } from '../pages/passwordreset/passwordreset';
import { Imghandler } from '../providers/imghandler/imghandler';
import { Buddies } from '../pages/buddies/buddies';
import { Requests } from '../providers/requests/requests';
import { Chat } from '../providers/chat/chat';
import { Buddychat } from '../pages/buddychat/buddychat';
import { Groupsprovider } from '../providers/groupsprovider/groupsprovider';
import { Newgroup } from '../pages/newgroup/newgroup';
import { Groupchat } from '../pages/groupchat/groupchat';
import { Groupbuddies } from '../pages/groupbuddies/groupbuddies';
import { Groupmembers } from '../pages/groupmembers/groupmembers';
import { Groupinfo } from '../pages/groupinfo/groupinfo';
import { Newsfeed } from '../pages/newsfeed/newsfeed';
import { Allposts } from '../pages/allposts/allposts';
import { Phonecall } from '../pages/phonecall/phonecall';
import { Tabs2 } from '../pages/tabs2/tabs2';
import { Weatherabout } from '../pages/weatherabout/weatherabout';
import { Weatherhome } from '../pages/weatherhome/weatherhome';
import { Weathersettings } from '../pages/weathersettings/weathersettings';
import { Weather } from '../providers/weather/weather';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Profiletab } from '../pages/profiletab/profiletab';
import { Groupstab } from '../pages/groupstab/groupstab';
import { Allpoststab } from '../pages/allpoststab/allpoststab';
import { Searchbuddiestab } from '../pages/searchbuddiestab/searchbuddiestab';
import { Posttab } from '../pages/posttab/posttab';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { Loginfail } from '../pages/loginfail/loginfail';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Tabs,
    Chats,
    Profile,
    Groups,
    Signup,
    Profilepic,
    Passwordreset,
    Buddies,
    Buddychat,
    Newgroup,
    Groupchat,
    Groupbuddies,
    Groupmembers,
    Groupinfo,
    Newsfeed,
    Allposts,
    Phonecall,
    Tabs2,
    Weatherabout,
    Weatherhome,
    Weathersettings,
    Profiletab,
    Groupstab,
    Allpoststab,
    Searchbuddiestab,
    Posttab,
    Loginfail
   // Profilepic
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'}),
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Tabs,
    Chats,
    Profile,
    Groups,
    Signup,
    Profilepic,
    Passwordreset,
    Buddies,
    Buddychat,
    Newgroup,
    Groupchat,
    Groupbuddies,
    Groupmembers,
    Groupinfo,
    Newsfeed,
    Allposts,
    Phonecall,
    Tabs2,
    Weatherabout,
    Weatherhome,
    Weathersettings,
    Profiletab,
    Groupstab,
    Allpoststab,
    Searchbuddiestab,
    Posttab,
    Loginfail
    //Profilepic
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
     File,
    FileChooser,
    FilePath,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   Auth,
   User,
   Chat,
   
   Groupsprovider,
   Requests,
   Imghandler,
   CallNumber,
   Weather,
    AngularFireAuth
  ]
})
export class AppModule {

  

}
