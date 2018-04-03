import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { CodigoService } from '../../../domain/tipo-usuario/codigo/codigo-service';
import { InformacoesPrevias } from '../informacoes-previas/informacoes-previas';


@Component({
  selector: 'page-participe-equipe',
  templateUrl: 'participe-equipe.html',
})
export class ParticipeEquipePage {

  public id: string;
  public codigo: string;
  public retorno: string;

  constructor(
    public _alertCtrl: AlertController,
    public _serviceCodigo: CodigoService,
    public navCtrl: NavController,
    private menu: MenuController,
    public navParams: NavParams) {
  }


  enviaCodigo(){
    let alert = this._alertCtrl.create({
      title: 'Você tem certeza da Equipe?',
      message: '' + this.codigo + '',
      buttons: [
        {
          text: 'Voltar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Sim',
          handler: () => {
            this._serviceCodigo
              .validaCodigo(this.id, this.codigo)
              .then(codigo => {
                console.log(codigo);
                if (codigo.retorno === 'Sucesso') {
                  this.navCtrl.setRoot(InformacoesPrevias);
                }
                else if (codigo.retorno === 'Limite maximo de quantidade de membros da equipe alcancado') {
                  this._alertCtrl.create({
                    title: 'Problema ao validar código',
                    subTitle: 'ID excedeu o limite. Verifique.',
                    buttons: [{ text: 'Ok' }]
                  }).present();
                }
                else if (codigo.retorno === 'Codigo invalido') {
                  this._alertCtrl.create({
                    title: 'Problema ao verificar Código',
                    subTitle: 'ID da equipe Inválido. Verifique',
                    buttons: [{ text: 'Ok' }]
                  }).present();
                }
              });
          }
        }
      ]
    });
    alert.present();



    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipeEquipePage');
  }
   
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
}

