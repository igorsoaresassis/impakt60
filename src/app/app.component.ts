import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParteCorpoPage } from '../pages/home/Usuario/parte-corpo/parte-corpo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp{

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;  

  public page: string
  public imagem: string

  pages: Array<{ icons: string, title: string, component: any }>;
  usuario: Array<{ icons: string, title: string, component: any }>;
  admin: Array<{ icons: string, title: string, component: any }>;
  treinador: Array<{ icons: string, title: string, component: any }>;

  constructor(platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.usuario = [
        { icons: 'icone-home', title: 'Home', component: HomePage },
        { icons: 'icone-home', title: 'Sair', component: LoginPage }
      ];
    // }
  }

  openPage(p) {
    this.nav.setRoot(p.component);
  }
}
