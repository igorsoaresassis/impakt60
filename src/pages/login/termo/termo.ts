import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { TermoService } from '../../../domain/login/termo/termo-service';
import { ParqPage } from '../parq/parq';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-termo',
  templateUrl: 'termo.html',
})
export class TermoPage implements OnInit {

  public id: any
  public idTermo: any
  public nome: any
  public cpf: any
  public rg: any
  public termo: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController,
    public _serviceTermo: TermoService) {
  }

  aceitaTermo() {
    let alert = this._alertCtrl.create({
      title: 'Você leu os termos abordados?',
      message: 'E de extrema importância você manter os seus dados atualzado no nosso sistema. Podemos prosseguir?',
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
            this._serviceTermo
              .validaTermo(this.id)
              .then(termo => {
                console.log(termo);
                if (termo.retorno === 'Sucesso') {
                  this.navCtrl.setRoot(ParqPage);
                }
              });
          }
        }
      ]
    });
    alert.present();
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Solicitando Termo. Aguarde ...'
    });

    loader.present();

    this._serviceTermo
      .buscaDadosTermo(this.id)
      .then(dados => {
        this.nome = dados.nome
        this.idTermo = dados.id
        this.cpf = dados.cpf
        this.rg = dados.rg
        this.termo = dados.texto
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Falha ao carregar Termo',
          buttons: [{ text: 'Ok' }],
        }).present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermoPage');
  }

}
