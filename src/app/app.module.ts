import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventListPage } from '../pages/event-list/event-list';
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

@NgModule({
  declarations: [
    MyApp,
    EventListPage,
    EventPage,
    ForgotPasswordPage,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventListPage,
    EventPage,
    ForgotPasswordPage,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    User,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Device,
    Geolocation
  ]
})
export class AppModule { }
