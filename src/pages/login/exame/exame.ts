import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../../home/home';
import { ExamesService } from '../../../domain/login/exames/exames-service';

@Component({
  selector: 'page-exame',
  templateUrl: 'exame.html',
})
export class ExamePage {

  public id: string
  public colesteroltotal: any
  public colesterolhdl: any
  public colesterolldl: any
  public triglicerides: any
  public pressaoarterial: any
  public glicose: any
  public hemogramahemacias: any
  public hemogramahematocrito: any
  public hemogramahemoglobina: any
  public hemogramaleucocitos: any
  public hemogramaplaquetas: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _serviceExames: ExamesService,
    public _alertCtrl: AlertController) {

    }

  enviaExames() {
    let alert = this._alertCtrl.create({
      title: 'Todas as informações estão corretas?',
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
            this._serviceExames
              .validaExames(
              this.id,
              this.colesteroltotal,
              this.colesterolhdl,
              this.colesterolldl,
              this.triglicerides,
              this.pressaoarterial,
              this.glicose,
              this.hemogramahemacias,
              this.hemogramahematocrito,
              this.hemogramahemoglobina,
              this.hemogramaleucocitos,
              this.hemogramaplaquetas)
              .then(exames => {
                if (this.colesteroltotal !== undefined) {
                  if (this.colesterolhdl !== undefined) {
                    if (this.colesterolldl !== undefined) {
                      if (this.triglicerides !== undefined) {
                        if (this.pressaoarterial !== undefined) {
                          if (this.glicose !== undefined) {
                            if (this.hemogramahemacias !== undefined) {
                              if (this.hemogramahematocrito !== undefined) {
                                if (this.hemogramahemoglobina !== undefined) {
                                  if (this.hemogramaleucocitos !== undefined) {
                                    if (this.hemogramaplaquetas !== undefined) {
                                      if (exames.retorno === 'Sucesso') {
                                        this.navCtrl.setRoot(HomePage);
                                      }
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
                                      title: 'Hemograma Leucocitos não informado.',
                                      subTitle: 'Varifique se campo está preenchido.',
                                      buttons: [{ text: 'Ok' }]
                                    }).present();
                                  }
                                }
                                else {
                                  this._alertCtrl.create({
                                    title: 'Hemograma Hemoglobina não informado.',
                                    subTitle: 'Varifique se campo está preenchido.',
                                    buttons: [{ text: 'Ok' }]
                                  }).present();
                                }
                              }
                              else {
                                this._alertCtrl.create({
                                  title: 'Hemograma Hematocrito não informado.',
                                  subTitle: 'Varifique se campo está preenchido.',
                                  buttons: [{ text: 'Ok' }]
                                }).present();
                              }
                            }
                            else {
                              this._alertCtrl.create({
                                title: 'Hemograma Hemacias não informado.',
                                subTitle: 'Varifique se campo está preenchido.',
                                buttons: [{ text: 'Ok' }]
                              }).present();
                            }
                          }
                          else {
                            this._alertCtrl.create({
                              title: 'Glicose não informado.',
                              subTitle: 'Varifique se campo está preenchido.',
                              buttons: [{ text: 'Ok' }]
                            }).present();
                          }
                        }
                        else {
                          this._alertCtrl.create({
                            title: 'Pressao Arterial não informado.',
                            subTitle: 'Varifique se campo está preenchido.',
                            buttons: [{ text: 'Ok' }]
                          }).present();
                        }
                      }
                      else {
                        this._alertCtrl.create({
                          title: 'Triglicerides não informado.',
                          subTitle: 'Varifique se campo está preenchido.',
                          buttons: [{ text: 'Ok' }]
                        }).present();
                      }
                    }
                    else {
                      this._alertCtrl.create({
                        title: 'Colesterol ldl não informado.',
                        subTitle: 'Varifique se campo está preenchido.',
                        buttons: [{ text: 'Ok' }]
                      }).present();
                    }
                  }
                  else {
                    this._alertCtrl.create({
                      title: 'Colesterol hdl não informado.',
                      subTitle: 'Varifique se campo está preenchido.',
                      buttons: [{ text: 'Ok' }]
                    }).present();
                  }
                } else {
                  this._alertCtrl.create({
                    title: 'Colesterol Total não informado.',
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
    console.log('ionViewDidLoad ExamePage');
  }

}
