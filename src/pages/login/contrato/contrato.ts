import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ParqPage } from '../parq/parq';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ContratoService } from '../../../domain/login/contrato/contrato-service';

@Component({
  selector: 'page-contrato',
  templateUrl: 'contrato.html',
})
export class ContratoPage implements OnInit {

  public id: string;
  public contrato: any
  public id_contrato: any

  constructor(
    private _loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _alertCtrl : AlertController,
    public _serviceContrato : ContratoService) {
  }
  
  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Parq. Aguarde ...'
    });

    loader.present();

    this._serviceContrato
      .retornaContrato()
      .then(dados => {
        this.contrato = dados.contrato
        this.id_contrato = dados.idContrato
        
        loader.dismiss();
      });
  }

  aceitaContrato(){
    let alert = this._alertCtrl.create({
      title: 'Você leu os termos abordado no Contrato?',
      message: 'Podemos proseguir?',
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
            this._serviceContrato
              .validaContrato(this.id, this.id_contrato)
              .then(contrato => {
                if (contrato.retorno === 'Sucesso') {
                  this.navCtrl.setRoot(ParqPage);
                }
              });
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratoPage');
  }

}
