import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TutoriaisGeraisAdminService } from '../../../../../domain/tipo-admin/tutoriais-gerais/tutoriais-gerais-admin-service';
import { tutoriaisGeraisAdmin } from '../../../../../domain/tipo-admin/tutoriais-gerais/tutoriais-gerais-Admin';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ControllerTutoriaisGeraisPage } from '../controller-tutoriais-gerais';

@Component({
  selector: 'page-lista-tutorias-gerais',
  templateUrl: 'lista-tutorias-gerais.html',
})
export class ListaTutoriasGeraisPage implements OnInit {

  public id: any
  public nome: any;
  public Gerais: tutoriaisGeraisAdmin[];
  public video: tutoriaisGeraisAdmin[];
  public imagem: tutoriaisGeraisAdmin[];
  public audio: tutoriaisGeraisAdmin[];
  public documento: tutoriaisGeraisAdmin[];
  public tipoArquivo: any;
  

  constructor(
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _serviceTutoriaisGeraisAdmin: TutoriaisGeraisAdminService,
    public navParams: NavParams,
    private streamingMedia: StreamingMedia,
    public _alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando os tutorias gerais já inseridos. Aguarde ...'
    });

    loader.present();

    this._serviceTutoriaisGeraisAdmin
      .validaTutoriaisGeraisAdmin()
      .then(gerais => {
        this.Gerais = gerais
        var i = 0
        for (i = 0; i < this.Gerais.length; i++) {
          if (this.Gerais[i].tipoArquivo === "1") {
            this.imagem = gerais
          } else if (this.Gerais[i].tipoArquivo === "2") {
            this.video = gerais
          } else if (this.Gerais[i].tipoArquivo === "3") {
            this.audio = gerais
          } else if (this.Gerais[i].tipoArquivo === "4") {
            this.documento = gerais
          }
        }
        
        loader.dismiss(); 
      });
  }

  iniciarVideo(id) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    }
    var i = 0
    for (i = 0; i < this.Gerais.length; i++) {
      if(this.video[i].id === id)
        this.streamingMedia.playVideo(this.video[i].urlArquivo, options);
    }
  }

  inativarAtivarTutorial(id, status){
    let alert = this._alertCtrl.create({
      title: 'Você tem certeza que deseja inativar o Tutorial?',
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
            status = "0"
            this._serviceTutoriaisGeraisAdmin
              .inativaAtivaGeraisAdmin(id, status)
              .then(inativarAtivar => {
                if (inativarAtivar.retorno === "Sucesso") {
                  this._alertCtrl.create({
                    title: 'Inativado com Sucesso',
                    buttons: [{ text: 'Ok' }]
                  }).present();
                  this.navCtrl.setRoot(ControllerTutoriaisGeraisPage);
                } else{
                  this._alertCtrl.create({
                    title: 'Erro na aplicação',
                    subTitle: 'Favor contate a empresa para resolver-mos o problema.',
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
    console.log('ionViewDidLoad ListaTutoriasGeraisPage');
  }

}
