import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TutoriaisGeraisUsuarioService } from '../../../../domain/tipo-usuario/tutoriaisGeraisUsuario/tutoriais-gerais-usuario';
import { GeraisUsuario } from '../../../../domain/tipo-usuario/tutoriaisGeraisUsuario/gerais-usuario';

@Component({
  selector: 'page-tutoriais-gerais-usuario',
  templateUrl: 'tutoriais-gerais-usuario.html',
})
export class TutoriaisGeraisUsuarioPage implements OnInit{

  public id: any
  public TutoriasGerais: GeraisUsuario[];
  public video: GeraisUsuario[];
  public imagem: GeraisUsuario[];
  public audio: GeraisUsuario[];
  public documento: GeraisUsuario[];
  public tipoArquivo: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    private _serviceTutoriaisGerais: TutoriaisGeraisUsuarioService,
    private streamingMedia: StreamingMedia
  ) {}

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Video Gerais. Aguarde ...'
    });

    loader.present();

    this._serviceTutoriaisGerais
      .validaTutoriaisGerais()
      .then(tutoriaisGerais => {
        this.TutoriasGerais = tutoriaisGerais
        var i = 0
        for (i = 0; i < this.TutoriasGerais.length; i++) {
          if (this.TutoriasGerais[i].tipoArquivo === "1") {
            this.imagem = tutoriaisGerais
          } else if (this.TutoriasGerais[i].tipoArquivo === "2") {
            this.video = tutoriaisGerais
          } else if (this.TutoriasGerais[i].tipoArquivo === "3") {
            this.audio = tutoriaisGerais
          } else if (this.TutoriasGerais[i].tipoArquivo === "4") {
            this.documento = tutoriaisGerais
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
    for (i = 0; i < this.TutoriasGerais.length; i++) {
      if (this.video[i].id === id)
        this.streamingMedia.playVideo(this.video[i].urlArquivo, options);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoriaisGeraisPage');
  }
}
