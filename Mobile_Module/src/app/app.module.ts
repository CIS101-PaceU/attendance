import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventListPage } from '../pages/event-list/event-list';
import { ActiveEventPage } from '../pages/active-event/active-event';
import { EventPage } from '../pages/events/event';
import { LoginPage } from '../pages/login/login';
import { ScanPage } from '../pages/scan/scan';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { ForgotPasswordPage } from '../pages/forgot_password/frg_pass';
import { Api } from '../providers/api';
import { User } from '../providers/user';
import { Device } from '@ionic-native/device';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Geolocation } from "@ionic-native/geolocation";
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
//import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBf5sYBtVFghFWNxagpVo7O8iaFQaokYe0",
    authDomain: "ionic2attendance.firebaseapp.com",
    databaseURL: "https://ionic2attendance.firebaseio.com",
    projectId: "ionic2attendance",
    storageBucket: "ionic2attendance.appspot.com",
    messagingSenderId: "916344351524"
  };

  //firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    EventListPage,
    EventPage,
    ForgotPasswordPage,
    LoginPage,
    ScanPage,
    ScanResultPage,
    ActiveEventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventListPage,
    EventPage,
    ForgotPasswordPage,
    LoginPage,
    ScanPage,
    ScanResultPage,
    ActiveEventPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    User,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Device,
    Geolocation,
    GooglePlus
  ]
})
export class AppModule { }
