import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { tutoriaisSemanaisAdmin } from '../../../../../domain/tipo-admin/tutoriais-semanais/tutoriais-semanais-admin';
import { TutoriaisSemanaisAdminService } from '../../../../../domain/tipo-admin/tutoriais-semanais/tutoriais-semanais-admin-service';

@Component({
  selector: 'page-lista-tutorias-semanais',
  templateUrl: 'lista-tutorias-semanais.html',
})
export class ListaTutoriasSemanaisPage implements OnInit {
  
  public Semanais: tutoriaisSemanaisAdmin[];

  constructor(
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _serviceTutoriaisSemanaisAdmin: TutoriaisSemanaisAdminService,
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

    this._serviceTutoriaisSemanaisAdmin
      .validaTutoriaisSemanaisAdmin()
      .then(semanais => {
        this.Semanais = semanais
        
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
    for (i = 0; i < this.Semanais.length; i++) {
      if (this.Semanais[i].id === id)
        this.streamingMedia.playVideo(this.Semanais[i].urlArquivo, options);
    }
    
  }

  // inativarAtivarTutorial(id, status){
  //   let alert = this._alertCtrl.create({
  //     title: 'Você tem certeza que deseja inativar o Tutorial?',
  //     message: 'Podemos proseguir?',
  //     buttons: [
  //       {
  //         text: 'Voltar',
  //         role: 'cancel',
  //         handler: () => {
  //         }
  //       },
  //       {
  //         text: 'Sim',
  //         handler: () => {
  //           status = "0"
  //           this._serviceTutoriaisSemanaisAdmin
  //             .inativaAtivaSemanaisAdmin(id, status)
  //             .then(inativarAtivar => {
  //               if (inativarAtivar.retorno === "Sucesso") {
  //                 this._alertCtrl.create({
  //                   title: 'Inativado com Sucesso',
  //                   buttons: [{ text: 'Ok' }]
  //                 }).present();
  //                 this.navCtrl.setRoot(ControllerTutoriaisSemanaisPage);
  //               } else{
  //                 this._alertCtrl.create({
  //                   title: 'Erro na aplicação',
  //                   subTitle: 'Favor contate a empresa para resolver-mos o problema.',
  //                   buttons: [{ text: 'Ok' }]
  //                 }).present();
  //               }
  //             });
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTutoriasGeraisPage');
  }

}
