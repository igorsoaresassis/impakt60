import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { WhoqolService } from '../../../domain/login/whoqol/whoqol-service';
import { Whoqol } from '../../../domain/login/whoqol/whoqol';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-whoqol',
  templateUrl: 'whoqol.html',
})
export class WhoqolPage implements OnInit {

  public id: any;
  public tipo: any;
  public Pergunta: Whoqol[];
  public idPergunta = {
    id: {
      id: {}
    }
  }
  public resposta = {
    resposta: {
      resposta: {}
    }
  }
  public resposta_um: any;
  public resposta_dois: any;
  public resposta_tres: any;
  public resposta_quatro: any;
  public resposta_cinco: any;
  public resposta_seis: any;
  public resposta_sete: any;
  public resposta_oito: any;
  public resposta_nove: any;
  public resposta_dez: any;
  public resposta_onze: any;
  public resposta_doze: any;
  public resposta_treze: any;
  public resposta_catorze: any;
  public resposta_quinze: any;
  public resposta_dezesseis: any;
  public resposta_dezessete: any;
  public resposta_dezoito: any;
  public resposta_dezenove: any;
  public resposta_vinte: any;
  public resposta_vinteUm: any;
  public resposta_vinteDois: any;
  public resposta_vintetres: any;
  public resposta_vintequatro: any;
  public resposta_vintecinco: any;
  public resposta_vinteseis: any;

  public pergunta_um: any;
  public pergunta_dois: any;
  public pergunta_tres: any;
  public pergunta_quatro: any;
  public pergunta_cinco: any;
  public pergunta_seis: any;
  public pergunta_sete: any;
  public pergunta_oito: any;
  public pergunta_nove: any;
  public pergunta_dez: any;
  public pergunta_onze: any;
  public pergunta_doze: any;
  public pergunta_treze: any;
  public pergunta_catorze: any;
  public pergunta_quinze: any;
  public pergunta_dezesseis: any;
  public pergunta_dezessete: any;
  public pergunta_dezoito: any;
  public pergunta_dezenove: any;
  public pergunta_vinte: any;
  public pergunta_vinteUm: any;
  public pergunta_vinteDois: any;
  public pergunta_vintetres: any;
  public pergunta_vintequatro: any;
  public pergunta_vintecinco: any;
  public pergunta_vinteseis: any;


  constructor(
    private _loadingCtrl: LoadingController,
    private _serviceWhoqol: WhoqolService,
    public navCtrl: NavController,
    public _alertCtrl: AlertController, 
    public navParams: NavParams) {
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Wholqol. Aguarde ...'
    });

    loader.present();

    this.tipo = "W"

    this._serviceWhoqol
      .retornaPerguntas(this.tipo)
      .then(whoqol => {
        this.Pergunta = whoqol
        var i = 0
        for (i = 0; i < this.Pergunta.length; i++) {
          this.idPergunta.id.id[i] = whoqol[i].idPergunta
        }

        loader.dismiss();
      });
  }
  
  salvaWhoqol(){
    this.pergunta_um = this.idPergunta.id.id[0]
    this.pergunta_dois = this.idPergunta.id.id[1]
    this.pergunta_tres = this.idPergunta.id.id[2]
    this.pergunta_quatro = this.idPergunta.id.id[3]
    this.pergunta_cinco = this.idPergunta.id.id[4]
    this.pergunta_seis = this.idPergunta.id.id[5]
    this.pergunta_sete = this.idPergunta.id.id[6]
    this.pergunta_oito = this.idPergunta.id.id[7]
    this.pergunta_nove = this.idPergunta.id.id[8]
    this.pergunta_dez = this.idPergunta.id.id[9]
    this.pergunta_onze = this.idPergunta.id.id[10]
    this.pergunta_doze = this.idPergunta.id.id[11]
    this.pergunta_treze = this.idPergunta.id.id[12]
    this.pergunta_catorze = this.idPergunta.id.id[13]
    this.pergunta_quinze = this.idPergunta.id.id[14]
    this.pergunta_dezesseis = this.idPergunta.id.id[15]
    this.pergunta_dezessete = this.idPergunta.id.id[16]
    this.pergunta_dezoito = this.idPergunta.id.id[17]
    this.pergunta_dezenove = this.idPergunta.id.id[18]
    this.pergunta_vinte = this.idPergunta.id.id[19]
    this.pergunta_vinteUm = this.idPergunta.id.id[20]
    this.pergunta_vinteDois = this.idPergunta.id.id[21]
    this.pergunta_vintetres = this.idPergunta.id.id[22]
    this.pergunta_vintequatro = this.idPergunta.id.id[23]
    this.pergunta_vintecinco = this.idPergunta.id.id[24]
    this.pergunta_vinteseis = this.idPergunta.id.id[25]

    this.resposta_um = this.resposta.resposta[1]
    this.resposta_dois = this.resposta.resposta[2]
    this.resposta_tres = this.resposta.resposta[3]
    this.resposta_quatro = this.resposta.resposta[4]
    this.resposta_cinco = this.resposta.resposta[5]
    this.resposta_seis = this.resposta.resposta[6]
    this.resposta_sete = this.resposta.resposta[7]
    this.resposta_oito = this.resposta.resposta[8]
    this.resposta_nove = this.resposta.resposta[9]
    this.resposta_dez = this.resposta.resposta[10]
    this.resposta_onze = this.resposta.resposta[11]
    this.resposta_doze = this.resposta.resposta[12]
    this.resposta_treze = this.resposta.resposta[13]
    this.resposta_catorze = this.resposta.resposta[14]
    this.resposta_quinze = this.resposta.resposta[15] 
    this.resposta_dezesseis = this.resposta.resposta[16] 
    this.resposta_dezessete = this.resposta.resposta[17] 
    this.resposta_dezoito = this.resposta.resposta[18] 
    this.resposta_dezenove = this.resposta.resposta[19] 
    this.resposta_vinte = this.resposta.resposta[20] 
    this.resposta_vinteUm = this.resposta.resposta[21] 
    this.resposta_vinteDois = this.resposta.resposta[22] 
    this.resposta_vintetres = this.resposta.resposta[23] 
    this.resposta_vintequatro = this.resposta.resposta[24] 
    this.resposta_vintecinco = this.resposta.resposta[25] 
    this.resposta_vinteseis = this.resposta.resposta[26] 

    let alert = this._alertCtrl.create({
      title: 'Todas as informações estão preenchidas?',
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
            this._serviceWhoqol
              .validaResposta(
              this.id,
              this.tipo,
              this.resposta_um,
              this.resposta_dois,
              this.resposta_tres,
              this.resposta_quatro,
              this.resposta_cinco,
              this.resposta_seis,
              this.resposta_sete,
              this.resposta_oito,
              this.resposta_nove,
              this.resposta_dez,
              this.resposta_onze,
              this.resposta_doze,
              this.resposta_treze,
              this.resposta_catorze,
              this.resposta_quinze,
              this.resposta_dezesseis,
              this.resposta_dezessete,
              this.resposta_dezoito,
              this.resposta_dezenove, 
              this.resposta_vinte,
              this.resposta_vinteUm,
              this.resposta_vinteDois,
              this.resposta_vintetres,
              this.resposta_vintequatro,
              this.resposta_vintecinco,
              this.resposta_vinteseis, 
              this.pergunta_um,
              this.pergunta_dois,
              this.pergunta_tres,
              this.pergunta_quatro,
              this.pergunta_cinco,
              this.pergunta_seis,
              this.pergunta_sete,
              this.pergunta_oito,
              this.pergunta_nove,
              this.pergunta_dez,
              this.pergunta_onze,
              this.pergunta_doze,
              this.pergunta_treze,
              this.pergunta_catorze,
              this.pergunta_quinze,
              this.pergunta_dezesseis,
              this.pergunta_dezessete,
              this.pergunta_dezoito,
              this.pergunta_dezenove,
              this.pergunta_vinte, 
              this.pergunta_vinteUm,
              this.pergunta_vinteDois,
              this.pergunta_vintetres,
              this.pergunta_vintequatro,
              this.pergunta_vintecinco, 
              this.pergunta_vinteseis
              )
              .then(resposta => {
                if (this.resposta_um !== undefined) {
                  if (this.resposta_dois !== undefined) {
                    if (this.resposta_tres !== undefined) {
                      if (this.resposta_quatro !== undefined) {
                        if (this.resposta_cinco !== undefined) {
                          if (this.resposta_seis !== undefined) {
                            if (this.resposta_sete !== undefined) {
                              if (this.resposta_oito !== undefined) {
                                if (this.resposta_nove !== undefined) {
                                  if (this.resposta_dez !== undefined) {
                                    if (this.resposta_onze !== undefined) {
                                      if (this.resposta_doze !== undefined) {
                                        if (this.resposta_treze !== undefined) {
                                          if (this.resposta_catorze !== undefined) {
                                            if (this.resposta_quinze !== undefined) {
                                              if (this.resposta_dezesseis !== undefined) {
                                                if (this.resposta_dezessete !== undefined) {
                                                  if (this.resposta_dezoito!== undefined) {
                                                    if (this.resposta_dezenove !== undefined) {
                                                      if (this.resposta_vinte !== undefined) {
                                                        if (this.resposta_vinteUm!== undefined) {
                                                          if (this.resposta_vinteDois !== undefined) {
                                                            if (this.resposta_vintetres !== undefined) {
                                                              if (this.resposta_vintequatro !== undefined) {
                                                                if (this.resposta_vintecinco !== undefined) {
                                                                  if (this.resposta_vinteseis!== undefined) {
                                                                    if (resposta.retorno === "Sucesso") {
                                                                      this.navCtrl.setRoot(HomePage);
                                                                    } else {
                                                                      this._alertCtrl.create({
                                                                        title: 'Erro na aplicação',
                                                                        subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                                                                        buttons: [{ text: 'Ok' }]
                                                                      }).present();
                                                                    }
                                                                  } else {
                                                                    this._alertCtrl.create({
                                                                      title: 'Com que fraquencia...',
                                                                      subTitle: 'Varifique se campo está preenchido.',
                                                                      buttons: [{ text: 'Ok' }]
                                                                    }).present();
                                                                  }
                                                                } else {
                                                                  this._alertCtrl.create({
                                                                    title: 'Mal humor',
                                                                    subTitle: 'Varifique se campo está preenchido.',
                                                                    buttons: [{ text: 'Ok' }]
                                                                  }).present();
                                                                }
                                                              } else {
                                                                this._alertCtrl.create({
                                                                  title: 'Serviço de saúde',
                                                                  subTitle: 'Varifique se campo está preenchido.',
                                                                  buttons: [{ text: 'Ok' }]
                                                                }).present();
                                                              }
                                                            } else {
                                                              this._alertCtrl.create({
                                                                title: 'Local moradia',
                                                                subTitle: 'Varifique se campo está preenchido.',
                                                                buttons: [{ text: 'Ok' }]
                                                              }).present();
                                                            }
                                                          } else {
                                                            this._alertCtrl.create({
                                                              title: 'Apoio do amigos',
                                                              subTitle: 'Varifique se campo está preenchido.',
                                                              buttons: [{ text: 'Ok' }]
                                                            }).present();
                                                          }
                                                        } else {
                                                          this._alertCtrl.create({
                                                            title: 'Vida Sexual',
                                                            subTitle: 'Varifique se campo está preenchido.',
                                                            buttons: [{ text: 'Ok' }]
                                                          }).present();
                                                        }
                                                      } else {
                                                        this._alertCtrl.create({
                                                          title: 'Relções Pessoais',
                                                          subTitle: 'Varifique se campo está preenchido.',
                                                          buttons: [{ text: 'Ok' }]
                                                        }).present();
                                                      }
                                                    } else {
                                                      this._alertCtrl.create({
                                                        title: 'Consigo mesmo',
                                                        subTitle: 'Varifique se campo está preenchido.',
                                                        buttons: [{ text: 'Ok' }]
                                                      }).present();
                                                    }
                                                  } else {
                                                    this._alertCtrl.create({
                                                      title: 'Capacidade para trabalhar',
                                                      subTitle: 'Varifique se campo está preenchido.',
                                                      buttons: [{ text: 'Ok' }]
                                                    }).present();
                                                  }
                                                } else {
                                                  this._alertCtrl.create({
                                                    title: 'Atividades do dia-a-dia',
                                                    subTitle: 'Varifique se campo está preenchido.',
                                                    buttons: [{ text: 'Ok' }]
                                                  }).present();
                                                }
                                              } else {
                                                this._alertCtrl.create({
                                                  title: 'Sono',
                                                  subTitle: 'Varifique se campo está preenchido.',
                                                  buttons: [{ text: 'Ok' }]
                                                }).present();
                                              }
                                            } else {
                                              this._alertCtrl.create({
                                                title: 'Capaz de se locomover',
                                                subTitle: 'Varifique se campo está preenchido.',
                                                buttons: [{ text: 'Ok' }]
                                              }).present();
                                            }
                                          } else {
                                            this._alertCtrl.create({
                                              title: 'Atividade de lazer',
                                              subTitle: 'Varifique se campo está preenchido.',
                                              buttons: [{ text: 'Ok' }]
                                            }).present();
                                          }
                                        } else {
                                          this._alertCtrl.create({
                                            title: 'Disponível no dia-a-dia',
                                            subTitle: 'Varifique se campo está preenchido.',
                                            buttons: [{ text: 'Ok' }]
                                          }).present();
                                        }
                                      } else {
                                        this._alertCtrl.create({
                                          title: 'dinheiro para satisfazer',
                                          subTitle: 'Varifique se campo está preenchido.',
                                          buttons: [{ text: 'Ok' }]
                                        }).present();
                                      }
                                    } else {
                                      this._alertCtrl.create({
                                        title: 'aparência física',
                                        subTitle: 'Varifique se campo está preenchido.',
                                        buttons: [{ text: 'Ok' }]
                                      }).present();
                                    }
                                  } else {
                                    this._alertCtrl.create({
                                      title: 'energia do dia-a-dia',
                                      subTitle: 'Varifique se campo está preenchido.',
                                      buttons: [{ text: 'Ok' }]
                                    }).present();
                                  }
                                } else {
                                  this._alertCtrl.create({
                                    title: 'Ambiente fisico',
                                    subTitle: 'Varifique se campo está preenchido.',
                                    buttons: [{ text: 'Ok' }]
                                  }).present();
                                }
                              } else {
                                this._alertCtrl.create({
                                  title: 'segurança vida diaria',
                                  subTitle: 'Varifique se campo está preenchido.',
                                  buttons: [{ text: 'Ok' }]
                                }).present();
                              }
                            } else {
                              this._alertCtrl.create({
                                title: 'consegue se concentrar',
                                subTitle: 'Varifique se campo está preenchido.',
                                buttons: [{ text: 'Ok' }]
                              }).present();
                            }
                          } else {
                            this._alertCtrl.create({
                              title: 'Medida da vida tem sentido',
                              subTitle: 'Varifique se campo está preenchido.',
                              buttons: [{ text: 'Ok' }]
                            }).present();
                          }
                        } else {
                          this._alertCtrl.create({
                            title: 'Aproveita a vida',
                            subTitle: 'Varifique se campo está preenchido.',
                            buttons: [{ text: 'Ok' }]
                          }).present();
                        }
                      } else {
                        this._alertCtrl.create({
                          title: 'precisa de tramaneto medico',
                          subTitle: 'Varifique se campo está preenchido.',
                          buttons: [{ text: 'Ok' }]
                        }).present();
                      }
                    } else {
                      this._alertCtrl.create({
                        title: 'dor física',
                        subTitle: 'Varifique se campo está preenchido.',
                        buttons: [{ text: 'Ok' }]
                      }).present();
                    }
                  } else {
                    this._alertCtrl.create({
                      title: 'satisfeito com a sua saúde',
                      subTitle: 'Varifique se campo está preenchido.',
                      buttons: [{ text: 'Ok' }]
                    }).present();
                  }
                } else {
                  this._alertCtrl.create({
                    title: 'Qualidade de vida',
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
    console.log('ionViewDidLoad WhoqolPage');
  }

}
