import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Camera } from '@ionic-native/camera';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http/';
import { Service } from '../../../../providers/service';
import { UsuarioService } from '../../../../domain/usuario/usuario-service';
import { AlimentacaoService } from '../../../../domain/tipo-usuario/alimentacao/alimentacao-service';
import { Alimentacao } from '../../../../domain/tipo-usuario/alimentacao/alimentacao';
import { Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

  public id: any;
  public campo: any;
  public imagem: any;
  public fileUpload: any

  @ViewChild('fileInp') fileInput: ElementRef;
  @Input() label: string;
  @Output() data = new EventEmitter<FormData>();

  constructor(
    private _service: Service, 
    private _http: Http, 
    public _serviceUsuario: UsuarioService,
    public navCtrl: NavController,
    // private camera: Camera,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public _serviceAlimentacao: AlimentacaoService) {
  }

  // upload: FileUploader = new FileUploader({ url: this.URL });
  

  validaAlimentacao(id: any, campo: any, upload: any) {

    id = this._serviceUsuario._usuarioLogado.id

    let api = this._service.api + `crud/upload/upatividades?id_cadastro=${id}&campo=${campo}&fileUpload=${upload}`;

    return this._http
      .get(api)
      .map(res => res.json())
      .toPromise()
      .then(envia => {
        let informacao = new Alimentacao(envia.retorno)
        if (envia.retorno === "Sucesso") {
          return informacao
        }
      });
  }

  file(event) {    
    
    let fd = new FormData();
    fd.append('file', event.srcElement.files[0]);
    this.data.emit(fd);
    this.fileUpload = this.fileInput.nativeElement.files[0]
    this.imagem = event.srcElement.value
    
    console.log(event);
  }

  onClick() {
    this.fileInput.nativeElement.click();
  }

  // ngOnInit() {
  //   this.fileUpload = "assets/imgs/card-chat.png"
  // }

  // addAlimentacao() {
  //   let actionSheet = this.actionsheetCtrl.create({
  //     title: 'Imagens',
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: 'Camera',
  //         icon: !this.platform.is('ios') ? 'camera' : null,
  //         handler: () => {
  //           this.camera.getPicture({
  //             quality: 100,
  //             destinationType: this.camera.DestinationType.FILE_URI,
  //             sourceType: this.camera.PictureSourceType.CAMERA,
  //             encodingType: this.camera.EncodingType.PNG,
  //             saveToPhotoAlbum: true
  //           }).then(image => {
  //             this.fileUpload = image
  //             // this.upload.queue[0] = this.fileUpload
  //           });
  //         }
  //       },
  //       {
  //         text: 'Galeria',
  //         icon: !this.platform.is('ios') ? 'images' : null,
  //         handler: () => {
  //           this.camera.getPicture({
  //             sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  //             destinationType: this.camera.DestinationType.DATA_URL
  //           }).then(image => {
  //             this.fileUpload = image
  //           })
  //             .catch(err => console.log(err));
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         icon: !this.platform.is('ios') ? 'close' : null,
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  // salvaAlimentacao(){
  //   if (this.campo === "url_treino_1"){
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao =>{
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Treino 1");
  //         }
  //       });
  //   } else if (this.campo === "url_cafe_manha") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("café da manhã");
  //         }
  //       });
  //   } else if (this.campo === "url_suplemento_1") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Suplemento 1");
  //         }
  //       });
  //   } else if (this.campo === "url_almoco") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Almoço");
  //         }
  //       });
  //   } else if (this.campo == "url_suplemento_2") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Suplemento 2");
  //         }
  //       });
  //   } else if (this.campo == "url_lanche_tarde") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Lanche Tarde");
  //         }
  //       });
  //   } else if (this.campo == "url_treino_2") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Treino 2");
  //         }
  //       });
  //   } else if (this.campo == "url_jantar") {
  //     this.validaAlimentacao(this.id, this.campo, this.upload)
  //       .then(alimentacao => {
  //         if (alimentacao.retorno === 'Sucesso') {
  //           console.log("Jantar");
  //         }
  //       });
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

}
