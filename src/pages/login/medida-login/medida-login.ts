import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MedidasService } from '../../../domain/tipo-usuario/medidas/medidas-service';
import { ParteCorpologinPage } from '../parte-corpo-login/parte-corpo-login';

@Component({
  selector: 'page-medida-login',
  templateUrl: 'medida-login.html',
})
export class MedidaLoginPage {

  public id: string
  public id_equipe: string
  public id_semana: string
  public peso: string
  public abdomen: string
  public cintura: string
  public quadril: string
  items: any = [];
  itemExpandHeight: number = 420;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _serviceMedidas: MedidasService,
    public _alertCtrl: AlertController) {
    this.items = [
      { expanded: false }
    ];
  }

  expandItem(item) {
    this.items.map((listItem) => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

  salvarMedidas() {
    let alert = this._alertCtrl.create({
      title: 'O dados informados estão',
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
            this.id_semana = "0"
            this._serviceMedidas
              .validaMedidas(this.id, this.id_semana, this.peso, this.abdomen, this.cintura, this.quadril)
              .then(medidas => {
                console.log(medidas);
                if (this.peso !== undefined) {
                  if (this.abdomen !== undefined) {
                    if (this.quadril !== undefined) {
                      if (this.cintura !== undefined) {
                        if (medidas.retorno === "Sucesso") {
                          this.navCtrl.setRoot(ParteCorpologinPage);
                        }
                        else {
                          this._alertCtrl.create({
                            title: 'Erro na aplicação',
                            subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                            buttons: [{ text: 'Ok' }]
                          }).present();
                        }
                      }
                      else {
                        this._alertCtrl.create({
                          title: 'Cintura não informado.',
                          subTitle: 'Varifique se campo está preenchido.',
                          buttons: [{ text: 'Ok' }]
                        }).present();
                      }
                    }
                    else {
                      this._alertCtrl.create({
                        title: 'Quadril não informado.',
                        subTitle: 'Varifique se campo está preenchido.',
                        buttons: [{ text: 'Ok' }]
                      }).present();
                    }
                  }
                  else {
                    this._alertCtrl.create({
                      title: 'Abdomen não informado.',
                      subTitle: 'Varifique se campo está preenchido.',
                      buttons: [{ text: 'Ok' }]
                    }).present();
                  }
                }
                else {
                  this._alertCtrl.create({
                    title: 'Peso não informado.',
                    subTitle: 'Varifique se campo está preenchido.',
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
    console.log('ionViewDidLoad MedidaLoginPage');
  }

}
