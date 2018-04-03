import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaTutoriasSemanaisPage } from './lista-tutorias-gerais/lista-tutorias-semanais';
import { CadastraTutoriaisSemanaisPage } from './cadastra-tutoriais-gerais/cadastra-tutoriais-semanais';

@Component({
  selector: 'page-controller-tutoriais-semanais',
  templateUrl: 'controller-tutoriais-semanais.html',
})
export class ControllerTutoriaisSemanaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  entraTutoriais() {
    this.navCtrl.setRoot(ListaTutoriasSemanaisPage);
  }

  cadastraTutoriais() {
    this.navCtrl.setRoot(CadastraTutoriaisSemanaisPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControllerTutoriaisSemanaisPage');
  }

}
