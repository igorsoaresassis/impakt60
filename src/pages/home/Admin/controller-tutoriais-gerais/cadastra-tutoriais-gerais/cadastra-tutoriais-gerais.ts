import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastra-tutoriais-gerais',
  templateUrl: 'cadastra-tutoriais-gerais.html',
})
export class CadastraTutoriaisGeraisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraTutoriaisGeraisPage');
  }

}
