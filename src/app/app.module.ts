import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MesDonnEsAgricolesPage } from '../pages/mes-donn-es-agricoles/mes-donn-es-agricoles';
import { QueFautIlPage } from '../pages/que-faut-il/que-faut-il';
import { MonAgriculturePage } from '../pages/mon-agriculture/mon-agriculture';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Tab3DefaultPagePage } from '../pages/tab3default-page/tab3default-page';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MesDonnEsAgricolesPage,
    QueFautIlPage,
    MonAgriculturePage,
    TabsControllerPage,
    Tab3DefaultPagePage,
    InscriptionPage,
    ConnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MesDonnEsAgricolesPage,
    QueFautIlPage,
    MonAgriculturePage,
    TabsControllerPage,
    Tab3DefaultPagePage,
    InscriptionPage,
    ConnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}