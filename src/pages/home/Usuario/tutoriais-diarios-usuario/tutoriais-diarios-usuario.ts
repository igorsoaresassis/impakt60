import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { TutoriaisDiariosUsuarioService } from '../../../../domain/tipo-usuario/tutoriaisDiariosUsuario/tutoriais-diarios-usuario';
import { DiariosUsuario } from '../../../../domain/tipo-usuario/tutoriaisDiariosUsuario/diarios-usuario';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

declare var moment;

@Component({
  selector: 'page-tutoriais-diarios-usuario',
  templateUrl: 'tutoriais-diarios-usuario.html',
})
export class TutoriaisDiariosUsuarioPage {

  myDate: String 

  public id: string
  public TutoriaisDiarios: DiariosUsuario[]
  public video: DiariosUsuario[];
  public imagem: DiariosUsuario[];
  public audio: DiariosUsuario[];
  public documento: DiariosUsuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    private _serviceTutoriaisDiarios: TutoriaisDiariosUsuarioService,
    private streamingMedia: StreamingMedia,
    public _alertCtrl: AlertController) {
    this.myDate = new Date().toISOString(); 
  }

  iniciarVideo(id) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    }
    var i = 0
    for (i = 0; i < this.TutoriaisDiarios.length; i++) {
      if (this.video[i].id === id)
        this.streamingMedia.playVideo(this.video[i].urlArquivo, options);
    }
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Video do dia. Aguarde ...'
    });

    loader.present();
    var formatted = moment(this.myDate).format('YYYY-MM-DD');
    // this.myDate = moment().format("DD/MM/YYYY")
    this._serviceTutoriaisDiarios
      .validaTutoriaisDiarios(formatted)
      .then(tutoriaisDiarios => {
        this.TutoriaisDiarios = tutoriaisDiarios
        var i = 0
        if (this.TutoriaisDiarios[i].retorno === "Error") {
          this._alertCtrl.create({
            title: 'No momento não tem nenhum tutorial diario',
            subTitle: 'Favor aguarde até inserimos os Tutorial do Dia.',
            buttons: [{ text: 'Ok' }]
          }).present();
          loader.dismiss();
        }
        else {
          for (i = 0; i < this.TutoriaisDiarios.length; i++) {
            if (this.TutoriaisDiarios[i].tipoArquivo === "1") {
              this.imagem = tutoriaisDiarios
            } else if (this.TutoriaisDiarios[i].tipoArquivo === "2") {
              this.video = tutoriaisDiarios
            } else if (this.TutoriaisDiarios[i].tipoArquivo === "3") {
              this.audio = tutoriaisDiarios
            } else if (this.TutoriaisDiarios[i].tipoArquivo === "4") {
              this.documento = tutoriaisDiarios
            }
          }
          loader.dismiss();
        }
      });
  }
  selecionarData() {
    var formatted = moment(this.myDate).format('YYYY-MM-DD');
    this._serviceTutoriaisDiarios
    .validaTutoriaisDiarios(formatted)
    .then(tutoriaisDiarios => {
      this.TutoriaisDiarios = tutoriaisDiarios
      let loader = this._loadingCtrl.create({
        content: 'Carregando. Aguarde ...'
      });
      var i = 0
      if (this.TutoriaisDiarios[i].retorno === "Error") {
        this._alertCtrl.create({
          title: 'Não possui tutorial diario nesse dia.',
          subTitle: 'Favor procure em outra data.',
          buttons: [{ text: 'Ok' }]
        }).present();
        loader.dismiss();
      }
      else {
        for (i = 0; i < this.TutoriaisDiarios.length; i++) {
          if (this.TutoriaisDiarios[i].tipoArquivo === "1") {
            this.imagem = tutoriaisDiarios
          } else if (this.TutoriaisDiarios[i].tipoArquivo === "2") {
            this.video = tutoriaisDiarios
          } else if (this.TutoriaisDiarios[i].tipoArquivo === "3") {
            this.audio = tutoriaisDiarios
          } else if (this.TutoriaisDiarios[i].tipoArquivo === "4") {
            this.documento = tutoriaisDiarios
          }
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoriaisDiariosUsuarioPage');
  }

}
