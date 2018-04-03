import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ParqService } from '../../../domain/login/parq/parq-service';  
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../../home/home';
import { Parq } from '../../../domain/login/parq/parq';

@Component({
  selector: 'page-parq',
  templateUrl: 'parq.html',
})
export class ParqPage implements OnInit {

  public id: any;
  public tipo: any;
  public idPergunta = {
    id:{
      id:{}
    }
  }
  public Pergunta: Parq[];
  public resposta = {
    resposta: {
      resposta: {}
    }
  };
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
  items: any = [];
  itemExpandHeight: number = 350;

  constructor(
    private _loadingCtrl: LoadingController,
    private _serviceParq: ParqService,
    public navCtrl: NavController, 
    public navParams: NavParams,
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

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Parq. Aguarde ...'
    });

    loader.present();

    this.tipo = "P"

    this._serviceParq
      .retornaPerguntas(this.tipo)
      .then(parq => {
        this.Pergunta = parq
        var i = 0
        for(i = 0; i < this.Pergunta.length; i++){
          this.idPergunta.id.id[i] = parq[i].idPergunta
        }
        
        loader.dismiss();
      });
  }
  
  salvarParq() {
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
      
    this.resposta_um = this.resposta.resposta[27] 
    this.resposta_dois = this.resposta.resposta[28] 
    this.resposta_tres = this.resposta.resposta[29] 
    this.resposta_quatro = this.resposta.resposta[30] 
    this.resposta_cinco = this.resposta.resposta[31] 
    this.resposta_seis = this.resposta.resposta[32] 
    this.resposta_sete = this.resposta.resposta[33] 
    this.resposta_oito = this.resposta.resposta[34] 
    this.resposta_nove = this.resposta.resposta[35] 
    this.resposta_dez = this.resposta.resposta[36] 
    this.resposta_onze = this.resposta.resposta[37] 
    this.resposta_doze = this.resposta.resposta[38]
    this.resposta_treze = this.resposta.resposta[39]
    this.resposta_catorze = this.resposta.resposta[40]
    this.resposta_quinze = this.resposta.resposta[41] 

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
            this._serviceParq
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
              this.pergunta_quinze
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
                                                title: 'OBSIDADE',
                                                subTitle: 'Varifique se campo está preenchido.',
                                                buttons: [{ text: 'Ok' }]
                                              }).present();
                                            }
                                          } else {
                                            this._alertCtrl.create({
                                              title: 'SEDENTARISMO',
                                              subTitle: 'Varifique se campo está preenchido.',
                                              buttons: [{ text: 'Ok' }]
                                            }).present();
                                          }
                                        } else {
                                          this._alertCtrl.create({
                                            title: 'HISTÓRIA FAMILIAR DE ATAQUE CARDÍACO',
                                            subTitle: 'Varifique se campo está preenchido.',
                                            buttons: [{ text: 'Ok' }]
                                          }).present();
                                        }
                                      } else {
                                        this._alertCtrl.create({
                                          title: 'DIABETES',
                                          subTitle: 'Varifique se campo está preenchido.',
                                          buttons: [{ text: 'Ok' }]
                                        }).present();
                                      }
                                    } else {
                                      this._alertCtrl.create({
                                        title: 'TABAGISMO',
                                        subTitle: 'Varifique se campo está preenchido.',
                                        buttons: [{ text: 'Ok' }]
                                      }).present();
                                    }
                                  } else {
                                    this._alertCtrl.create({
                                      title: 'PRESSÃO ARTERIAL',
                                      subTitle: 'Varifique se campo está preenchido.',
                                      buttons: [{ text: 'Ok' }]
                                    }).present();
                                  }
                                } else {
                                  this._alertCtrl.create({
                                    title: 'COLESTEROL',
                                    subTitle: 'Varifique se campo está preenchido.',
                                    buttons: [{ text: 'Ok' }]
                                  }).present();
                                }
                              } else {
                                this._alertCtrl.create({
                                  title: 'IDADE',
                                  subTitle: 'Varifique se campo está preenchido.',
                                  buttons: [{ text: 'Ok' }]
                                }).present();
                              }
                            } else {
                              this._alertCtrl.create({
                                title: 'Você tem conhecimento...',
                                subTitle: 'Varifique se campo está preenchido.',
                                buttons: [{ text: 'Ok' }]
                              }).present();
                            }
                          } else {
                            this._alertCtrl.create({
                              title: 'Algum médico já...',
                              subTitle: 'Varifique se campo está preenchido.',
                              buttons: [{ text: 'Ok' }]
                            }).present();
                          }
                        } else {
                          this._alertCtrl.create({
                            title: 'Você tem algum...',
                            subTitle: 'Varifique se campo está preenchido.',
                            buttons: [{ text: 'Ok' }]
                          }).present();
                        }
                      } else {
                        this._alertCtrl.create({
                          title: 'Você já perdeu...',
                          subTitle: 'Varifique se campo está preenchido.',
                          buttons: [{ text: 'Ok' }]
                        }).present();
                      }
                    } else {
                      this._alertCtrl.create({
                        title: 'Você já sentiu...',
                        subTitle: 'Varifique se campo está preenchido.',
                        buttons: [{ text: 'Ok' }]
                      }).present();
                    }
                  } else {
                    this._alertCtrl.create({
                      title: 'Você tem dor...',
                      subTitle: 'Varifique se campo está preenchido.',
                      buttons: [{ text: 'Ok' }]
                    }).present();
                  }
                } else {
                  this._alertCtrl.create({
                    title: 'Seu médico já...',
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
    console.log('ionViewDidLoad ParqPage');
  }

}
