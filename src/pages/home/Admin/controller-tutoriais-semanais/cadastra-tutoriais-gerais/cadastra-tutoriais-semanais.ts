import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastra-tutoriais-semanais',
  templateUrl: 'cadastra-tutoriais-semanais.html',
})
export class CadastraTutoriaisSemanaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraTutoriaisSemanaisPage');
  }

}
