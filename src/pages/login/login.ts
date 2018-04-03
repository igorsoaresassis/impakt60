import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ParticipeEquipePage } from './participe-equipe/participe-equipe';
import { ContratoPage } from './contrato/contrato';
import { ExamePage } from './exame/exame';
import { TermoPage } from './termo/termo';
import { ParqPage } from './parq/parq';
import { InformacoesPrevias } from './informacoes-previas/informacoes-previas';
import { HomePage } from '../home/home';
import { WhoqolPage } from './whoqol/whoqol';
import { MedidaLoginPage } from './medida-login/medida-login';
import { ParteCorpologinPage } from './parte-corpo-login/parte-corpo-login';
import { AguardePage } from '../aguarde/aguarde';
import { FimPage } from '../fim/fim';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public id: string;
  public pswd: string;
  public tipo: string;

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _serviceUsuario: UsuarioService) { }

  get usuarioLogado() {
    return this._serviceUsuario.obtemUsuarioLogado();
  }
 
  efetuaLogin() {
    this._serviceUsuario
    .realizaLogin(this.id, this.pswd)
    .then(usuario => {
      console.log(usuario);
      if (usuario.retorno === "1") {
        if (usuario.tipo === "1" && usuario.possui_equipe === "0") {
          this.navCtrl.setRoot(ParticipeEquipePage) 
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "0") {
          this.navCtrl.setRoot(InformacoesPrevias)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "0") {
          this.navCtrl.setRoot(ContratoPage)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "0") {
          this.navCtrl.setRoot(TermoPage) 
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "1" && usuario.possui_parq === "0") {
          this.navCtrl.setRoot(ParqPage)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "1" && usuario.possui_parq === "1" && usuario.possui_whoqol === "0") {
          this.navCtrl.setRoot(WhoqolPage)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "1" && usuario.possui_parq === "1" && usuario.possui_whoqol === "1" && usuario.possui_pesos_medidas === "0") {
          this.navCtrl.setRoot(MedidaLoginPage)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "1" && usuario.possui_parq === "1" && usuario.possui_whoqol === "1" && usuario.possui_pesos_medidas === "1" && usuario.possui_partes_corpo === "0") {
          this.navCtrl.setRoot(ParteCorpologinPage)
        } else if (usuario.tipo === "1" && usuario.possui_equipe === "1" && usuario.possui_informacoes === "1" && usuario.possui_contrato === "1" && usuario.possui_termo === "1" && usuario.possui_parq === "1" && usuario.possui_whoqol === "1" && usuario.possui_pesos_medidas === "1" && usuario.possui_partes_corpo === "1" && usuario.possui_exame === "0") {
          this.navCtrl.setRoot(ExamePage)
        } else if (usuario.id_semana === "0"){
          this.navCtrl.setRoot(AguardePage) 
        } else if (usuario.id_semana === "10") {
          this.navCtrl.setRoot(FimPage)
        } else {
          this.navCtrl.setRoot(HomePage)
        }  
      }
    })
    .catch(() => {
      this._alertCtrl.create({
        title: 'Problema no login',
        subTitle: 'ID ou senha inválidos. Verifique',
        buttons: [{ text: 'Ok' }]
      }).present();
    });
  }
  
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
}
