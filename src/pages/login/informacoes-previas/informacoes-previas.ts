import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContratoPage } from '../contrato/contrato';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { InformacoesService } from '../../../domain/login/informacoesPrevias/informacoes-service';

@Component({
  selector: 'page-informacoes-previas',
  templateUrl: 'informacoes-previas.html',
})
export class InformacoesPrevias {
  
  public id: string;

  constructor(public navCtrl: NavController,
    public _serviceInformacao: InformacoesService,
    public _alertCtrl: AlertController,
    public navParams: NavParams,
    private streamingMedia: StreamingMedia) {
  }
  
  iniciarVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    }
    this.streamingMedia.playVideo('http://akmoslife.com.br/impakt/tutoriais_semanais/20171009110516_0.mp4', options);  
  }

  aceitaVideo(){
    let alert = this._alertCtrl.create({
      title: 'Você vizualizou o video?',
      message: 'Podemos continuar?',
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
            this._serviceInformacao
              .validaInformacao(this.id)
              .then(Informacao => {
                console.log(Informacao);
                if (Informacao.retorno === 'Sucesso') {
                  this.navCtrl.setRoot(ContratoPage);
                }
              });
          }
        }
      ]
    });
    alert.present();

    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}