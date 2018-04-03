import { Component ,OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UsuarioService } from '../../../../../domain/usuario/usuario-service';
import { Service } from '../../../../../providers/service';
import { Historico } from '../../../../../domain/tipo-usuario/medidas/historico';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage implements OnInit{

  public id: string
  public mes: string
  public ano: string
  public controle: string
  public historico: Historico[]
  public mesAtual: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    public _serviceUsuario: UsuarioService,
    private _service: Service,
    private _http: Http,
    public _alertCtrl: AlertController
  ) {}

  @ViewChild(Slides) slides: Slides;
  
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  buscaHistoricoRegistros(id: any) {

    id = this._serviceUsuario._usuarioLogado.id

    let api = this._service.api + `crud/pesosmedidas/retornahistorico?id_cadastro=${id}`;

    return this._http
      .get(api)
      .map(res => res.json())
      .toPromise()
      .then(envia => {
        return envia
      });
  }

  buscarRestoHistorico(id: any, mes: any, ano: any, controle: any){

    id = this._serviceUsuario._usuarioLogado.id

    let api = this._service.api + `crud/pesosmedidas/retornahistoricomes?id_cadastro=${id}&mes=${mes}&ano=${ano}&controle=${controle}`;

    return this._http
      .get(api)
      .map(res => res.json())
      .toPromise()
      .then(envia => {
        this.mes = envia["0"].mesNumero
        return envia
      });

  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Buscando o Historico. Aguarde ...'
    });

    loader.present();

    this.buscaHistoricoRegistros(this.id)
      .then(envia => {
        this.historico = envia;
        this.mesAtual = envia["0"].mesNumero
        this.mes = envia["0"].mesNumero
        this.ano = envia["0"].ano

        // if(envia["1"].idSemana === "2"){
        //   if(envia["0"].peso > envia["1"].peso) {
        //     this.valor = "Positivo";
        //   } else {
        //     this.valor = "Negativo";
        //   }
        // }
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Falha ao carregar Historico',
          buttons: [{ text: 'Ok' }],
          subTitle: 'Não tem nenhum Historico no momento'
        }).present();
      });
  }

  slideNext(){
    this.controle = "1"
    this.buscarRestoHistorico(this.id, this.mes, this.ano, this.controle)
      .then(envia => {
        this.historico = envia;
      })
      .catch(err => {
        console.log(err);
        this._alertCtrl.create({
          title: 'Falha ao carregar Historico',
          buttons: [{ text: 'Ok' }],
          subTitle: 'Não tem nenhum Historico no momento'
        }).present();
      });
  }

  slidePrevius() {
    this.controle = "0"
    this.buscarRestoHistorico(this.id, this.mes, this.ano, this.controle)
      .then(envia => {
        this.historico = envia;
      })
      .catch(err => {
        console.log(err);
        this._alertCtrl.create({
          title: 'Falha ao carregar Historico',
          buttons: [{ text: 'Ok' }],
          subTitle: 'Não tem nenhum Historico no momento'
        }).present();
      });
  }
  
  ionViewDidLoad() {
  }

}
