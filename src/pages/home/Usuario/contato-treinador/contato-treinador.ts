import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contato-treinador',
  templateUrl: 'contato-treinador.html',
})
export class ContatoTreinadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoTreinadorPage');
  }

}
