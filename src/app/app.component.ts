import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  constructor(
    private platform: Platform,
    private storage: Storage,
    private navctrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('storage_session').then((res) => {
      if(res==null) {
        this.navctrl.navigateRoot('/login');
      }else {
        this.navctrl.navigateRoot('/home');
      }

    });
  }
}
