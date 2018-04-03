import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../medidas/registro/registro';
import { HistoricoPage } from '../medidas/historico/historico';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MedidasService } from '../../../../domain/tipo-usuario/medidas/medidas-service';

@Component({
  selector: 'page-medidas',
  templateUrl: 'medidas.html',
})
export class MedidasPage {

  public id: string;

  constructor(
    public navCtrl: NavController,
    public _serviceMedidas: MedidasService,
    public navParams: NavParams,
    public _alertCtrl: AlertController
  ) {
  }

  entrarRegistro() {
    this._serviceMedidas
      .validaDataRegistro(this.id)
      .then(medidas => {
        console.log(medidas);
        if (medidas.retorno === '0') {
          this.navCtrl.setRoot(RegistroPage);
        } else {
          this._alertCtrl.create({
            title: 'Aviso!',
            subTitle: 'Seus registros foram incluidos no dia ' + medidas.data_atual +  ', para realizadas o cadastro novamente deve ser feito a partir da data: ' + medidas.proxima_data,
            buttons: [{ text: 'Ok' }]
          }).present();
        }
      });
  }

  entrarHistorico() {
    this.navCtrl.setRoot(HistoricoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedidasPage');
  }

}
