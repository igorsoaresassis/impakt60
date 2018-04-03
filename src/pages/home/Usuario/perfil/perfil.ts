import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { PerfilService } from '../../../../domain/tipo-usuario/perfil/perfil-service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UsuarioService } from '../../../../domain/usuario/usuario-service';

declare var $: any;

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage implements OnInit {

  public id: any
  public nome: any
  public login: any
  public url_foto_perfil: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    public _serviceUsuario: UsuarioService,
    public _servicePerfil: PerfilService,
    public _alertCtrl: AlertController ) {
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Perfil. Aguarde ...'
    });

    loader.present();

    this._servicePerfil
      .retornaPerfil(this.id)
      .then(perfil => {
        this.nome = perfil.nome
        this.login = perfil.login
        this.url_foto_perfil = perfil.url_foto_perfil
        
        loader.dismiss();
      });
  }

  salvarFoto(){
    let alert = this._alertCtrl.create({
      title: 'Deseja salvar a foto?',
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
            let loader = this._loadingCtrl.create({
              content: 'Salvando imagens. Aguarde ...'
            });
              var formdata = new FormData();
              this.id = this._serviceUsuario._usuarioLogado.id
              var teste = this.id
              // var navCtrl = this.navCtrl
              $.when($('.fileUpload').each(function (i, e) {
                var file = e.files[0];
                if (file)
                  formdata.append('fileUpload[' + i + ']', file);
                  formdata.append('id_cadastro', teste);

              })).done(function () {
                $.ajax({
                  type: 'POST', cache: false, processData: false, contentType: false,
                  url: 'https://impakt60.ak-backoffice.com.br/crud/upload/upperfil',
                  data: formdata,
                  success: function (data) {
                    var dados = JSON.parse(data);
                    if (dados.retorno == 'Sucess') {
                      loader.dismiss();
                    }
                  }
                });
              });
          }
        }
      ]
    });
    alert.present();
  }
  
  fileChangeUm(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url_foto_perfil = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
