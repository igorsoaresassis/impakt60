import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { TutoriaisSemanaisUsuarioService } from '../../../../domain/tipo-usuario/tutoriaisSemanaisUsuario/tutoriais-semanais-usuario';

@Component({
  selector: 'page-tutoriais-semanais-usuario',
  templateUrl: 'tutoriais-semanais-usuario.html',
})
export class TutoriaisSemanaisUsuarioPage implements OnInit {

  public id: string
  public link: string
  public semanais: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    private _serviceTutoriaisSemanais: TutoriaisSemanaisUsuarioService,
    private streamingMedia: StreamingMedia
    ) {
  }

  iniciarVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    }
    this.streamingMedia.playVideo(this.link, options);
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Video da Semana. Aguarde ...'
    });

    loader.present();

    this._serviceTutoriaisSemanais
      .validaTutoriaisSemanais(this.id)
      .then(tutoriaisSemanais => {
        this.link = tutoriaisSemanais.urlAquivo
        this.semanais = tutoriaisSemanais.semana
        loader.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoriaisSemanaisUsuarioPage');
  }

}
