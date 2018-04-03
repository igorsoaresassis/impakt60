import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaTutoriasGeraisPage } from './lista-tutorias-gerais/lista-tutorias-gerais';
import { CadastraTutoriaisGeraisPage } from './cadastra-tutoriais-gerais/cadastra-tutoriais-gerais';


@Component({
  selector: 'page-controller-tutoriais-gerais',
  templateUrl: 'controller-tutoriais-gerais.html',
})
export class ControllerTutoriaisGeraisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  entraTutoriais() {
    this.navCtrl.setRoot(ListaTutoriasGeraisPage);
  }

  cadastraTutoriais() {
    this.navCtrl.setRoot(CadastraTutoriaisGeraisPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControllerTutoriaisGeraisPage');
  }

}
