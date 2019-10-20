import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlunosProvider } from '../providers/alunos/alunos';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { ResetpassPage } from '../pages/resetpass/resetpass';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCa0wHky_n1r81FwdAmdA033hv-MOnoEEA",
      authDomain: "buschool-9ece4.firebaseapp.com",
      databaseURL: "https://buschool-9ece4.firebaseio.com",
      projectId: "buschool-9ece4",
      storageBucket: "buschool-9ece4.appspot.com",
      messagingSenderId: "325828157377",
      //appId: "1:325828157377:web:b7fb6a9caaea59fe"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunosProvider,
    AuthProvider
  ]
})
export class AppModule {}
