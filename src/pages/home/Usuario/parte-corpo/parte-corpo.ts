import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../../../domain/usuario/usuario-service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { RegistroPage } from '../medidas/registro/registro';

declare var $: any;


@Component({
  selector: 'page-parte-corpo',
  templateUrl: 'parte-corpo.html',
})
export class ParteCorpoPage implements OnInit {

  public imageURL: any;
  public id: any;
  public id_semana: any;
  public id_cadastro: any; 
  imageURI: any;
  img1: any;
  img2: any;
  img3: any;
  img4: any;
  items: any = [];
  itemExpandHeight: number = 570;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _serviceUsuario: UsuarioService,
    public toastCtrl: ToastController,
    private _loadingCtrl: LoadingController,
    public _alertCtrl: AlertController) {
    this.items = [
      { expanded: false }
    ];
  }
  
  ngOnInit() {
    this.img1 = "assets/imgs/logo.png"
    this.img2 = "assets/imgs/logo.png"
    this.img3 = "assets/imgs/logo.png"
    this.img4 = "assets/imgs/logo.png" 
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

  salvarPartes() {
    let alert = this._alertCtrl.create({
      title: 'Todas as fotos foram inseridas?',
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

            loader.present();
            if ($('#photo_1').val() !== '') {
              if ($('#photo_2').val() != '') {
                if ($('#photo_3').val() != '') {
                  if ($('#photo_4').val() != ''){
                    if ($('#photo_1').val() != '' && $('#photo_2').val() != '' && $('#photo_3').val() != '' && $('#photo_4').val() != '') {
                        var formdata = new FormData();
                        this.id = this._serviceUsuario._usuarioLogado.id
                        this.id_semana = this._serviceUsuario._usuarioLogado.id_semana
                        var teste = this.id
                        var testeSemana = this.id_semana
                        var navCtrl = this.navCtrl
                        $.when($('.fileUpload').each(function (i, e) {
                          var file = e.files[0];
                          if (file)
                            formdata.append('fileUpload[' + i + ']', file);
                            formdata.append('id_cadastro', testeSemana);
                            formdata.append('id_semana', '1');
                        })).done(function () {
                          $.ajax({
                            type: 'POST', cache: false, processData: false, contentType: false,
                            url: 'https://impakt60.ak-backoffice.com.br/crud/upload/upapartescorpo',
                            data: formdata,
                            success: function (data) {
                              var dados = JSON.parse(data);
                              if (dados.retorno == 'Sucesso') {
                                navCtrl.setRoot(RegistroPage);
                                loader.dismiss();
                              }
                            }
                          });
                        });
                    }
                    else {
                      this._alertCtrl.create({
                        title: 'Erro na aplicação',
                        subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                        buttons: [{ text: 'Ok' }]
                      }).present();
                    }
                  } else {
                    this._alertCtrl.create({
                      title: 'Erro na aplicação',
                      subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                      buttons: [{ text: 'Ok' }]
                    }).present();
                  }
                } else {
                  this._alertCtrl.create({
                    title: 'Erro na aplicação',
                    subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                    buttons: [{ text: 'Ok' }]
                  }).present();
                }
              } else {
                this._alertCtrl.create({
                  title: 'Erro na aplicação',
                  subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                  buttons: [{ text: 'Ok' }]
                }).present();
              }
            } else {
              this._alertCtrl.create({
                title: 'Erro na aplicação',
                subTitle: 'Favor contate a empresa para resolver-mos o problema.',
                buttons: [{ text: 'Ok' }]
              }).present();
            }
          }
        }
      ]
    });
    alert.present();
  }
  

  girarEsquerdaUm(){
    $('#giraEsquerdaUm')
      if ($('#preview_image1').hasClass('north')) {
         $('#preview_image1').attr('class', 'west');
        return false
      } else if ($('#preview_image1').hasClass('west')) {
        $('#preview_image1').attr('class', 'south');
        return false
      } else if ($('#preview_image1').hasClass('south')) {
        $('#preview_image1').attr('class', 'east');
        return false
      } else {
        $('#preview_image1').attr('class', 'north');
        return false
      }
    }

  girarDireitaUm() {
    $('#giraDireitaUm')
    if ($('#preview_image1').hasClass('northDireita')) {
      $('#preview_image1').attr('class', 'westDireita');
      return false
    } else if ($('#preview_image1').hasClass('westDireita')) {
      $('#preview_image1').attr('class', 'southDireita');
      return false
    } else if ($('#preview_image1').hasClass('southDireita')) {
      $('#preview_image1').attr('class', 'eastDireita');
      return false
    } else {
      $('#preview_image1').attr('class', 'northDireita');
      return false
    }
  }

  girarEsquerdaDois() {
    $('#giraEsquerdaDois')
    if ($('#preview_image2').hasClass('north')) {
      $('#preview_image2').attr('class', 'west');
      return false
    } else if ($('#preview_image2').hasClass('west')) {
      $('#preview_image2').attr('class', 'south');
      return false
    } else if ($('#preview_image2').hasClass('south')) {
      $('#preview_image2').attr('class', 'east');
      return false
    } else {
      $('#preview_image2').attr('class', 'north');
      return false
    }
  }

  girarDireitaDois() {
    $('#giraDireitaDois')
    if ($('#preview_image2').hasClass('northDireita')) {
      $('#preview_image2').attr('class', 'westDireita');
      return false
    } else if ($('#preview_image2').hasClass('westDireita')) {
      $('#preview_image2').attr('class', 'southDireita');
      return false
    } else if ($('#preview_image2').hasClass('southDireita')) {
      $('#preview_image2').attr('class', 'eastDireita');
      return false
    } else {
      $('#preview_image2').attr('class', 'northDireita');
      return false
    }
  }

  girarEsquerdaTres() {
    $('#giraEsquerdaTres')
    if ($('#preview_image3').hasClass('north')) {
      $('#preview_image3').attr('class', 'west');
      return false
    } else if ($('#preview_image3').hasClass('west')) {
      $('#preview_image3').attr('class', 'south');
      return false
    } else if ($('#preview_image3').hasClass('south')) {
      $('#preview_image3').attr('class', 'east');
      return false
    } else {
      $('#preview_image3').attr('class', 'north');
      return false
    }
  }

  girarDireitaTres() {
    $('#giraDireitaTres')
    if ($('#preview_image3').hasClass('northDireita')) {
      $('#preview_image3').attr('class', 'westDireita');
      return false
    } else if ($('#preview_image3').hasClass('westDireita')) {
      $('#preview_image3').attr('class', 'southDireita');
      return false
    } else if ($('#preview_image3').hasClass('southDireita')) {
      $('#preview_image3').attr('class', 'eastDireita');
      return false
    } else {
      $('#preview_image3').attr('class', 'northDireita');
      return false
    }
  }

  girarEsquerdaQuatro() {
    $('#giraEsquerdaQuatro')
    if ($('#preview_image4').hasClass('north')) {
      $('#preview_image4').attr('class', 'west');
      return false
    } else if ($('#preview_image4').hasClass('west')) {
      $('#preview_image4').attr('class', 'south');
      return false
    } else if ($('#preview_image4').hasClass('south')) {
      $('#preview_image4').attr('class', 'east');
      return false
    } else {
      $('#preview_image4').attr('class', 'north');
      return false
    }
  }

  girarDireitaQuatro() {
    $('#giraDireitaQuatro')
    if ($('#preview_image4').hasClass('northDireita')) {
      $('#preview_image4').attr('class', 'westDireita');
      return false
    } else if ($('#preview_image4').hasClass('westDireita')) {
      $('#preview_image4').attr('class', 'southDireita');
      return false
    } else if ($('#preview_image4').hasClass('southDireita')) {
      $('#preview_image4').attr('class', 'eastDireita');
      return false
    } else {
      $('#preview_image4').attr('class', 'northDireita');
      return false
    }
  }

  fileChangeUm(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  fileChangeDois(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img2 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  fileChangeTres(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img3 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  fileChangeQuatro(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img4 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParteCorpoPage');
  }

}
