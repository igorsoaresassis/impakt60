import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home';

@Component({
  selector: 'page-adicionar-treinador',
  templateUrl: 'adicionar-treinador.html',
})
export class AdicionarTreinadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  enviarAdicionarTreinador() {
    this.navCtrl.setRoot(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTreinadorPage');
  }

}
