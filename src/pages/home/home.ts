import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { ChatEquipePage } from './Usuario/chat-equipe/chat-equipe';
import { TutoriaisSemanaisUsuarioPage } from './Usuario/tutoriais-semanais-usuario/tutoriais-semanais-usuario';
import { TutoriaisGeraisUsuarioPage } from './Usuario/tutoriais-gerais-usuario/tutoriais-gerais-usuario';
import { AlimentacaoPage } from './Usuario/alimentacao/alimentacao';
import { ContatoTreinadorPage } from './Usuario/contato-treinador/contato-treinador';
import { RankingPage } from './Usuario/ranking/ranking';
import { PerfilPage } from './Usuario/perfil/perfil';
import { MedidasPage } from './Usuario/medidas/medidas';
import { VisualizaExamesPage } from './Usuario/visualiza-exames/visualiza-exames';
import { ParteCorpoPage } from './Usuario/parte-corpo/parte-corpo';
import { ControllerTutoriaisGeraisPage } from './Admin/controller-tutoriais-gerais/controller-tutoriais-gerais';
import { ControllerTutoriaisSemanaisPage } from './Admin/controller-tutoriais-semanais/controller-tutoriais-semanais';
import { TutoriaisDiariosUsuarioPage } from './Usuario/tutoriais-diarios-usuario/tutoriais-diarios-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public cards: any;
  public page: any;

  public id: string;
  public pswd: string;
  public tipo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _serviceUsuario: UsuarioService) { }

  get usuarioLogado() {
    return this._serviceUsuario.obtemUsuarioLogado();
  }


  exibirHome() {
    if (this._serviceUsuario.obtemUsuarioLogado().tipo === '1') {
      return this.cards = [
      {
        "nome": "Alimentação",
        "icone": "card-imagens",
        "pagina": AlimentacaoPage
      },
      {
        "nome": "Chat Equipe",
        "icone": "card-chat",
        "pagina": ChatEquipePage
      },
      {
        "nome": "Contato AKH Trainer",
        "icone": "card-contato",
        "pagina": ContatoTreinadorPage
      },
      {
        "nome": "Exames de Saúde",
        "icone": "card-perfil",
        "pagina": VisualizaExamesPage
      },
      {
        "nome": "Parte do Corpo",
        "icone": "card-imagens",
        "pagina": ParteCorpoPage
      },
      {
        "nome": "Perfil",
        "icone": "card-perfil",
        "pagina": PerfilPage
      },
      {
        "nome": "Pesos e Medidas",
        "icone": "card-perfil",
        "pagina": MedidasPage
      },
      {
        "nome": "Raking todas as Equipes",
        "icone": "card-rankingEquipe",
        "pagina": RankingPage
      },
      {
        "nome": "Raking do Usuário da Equipe",
        "icone": "card-rankingGeral",
        "pagina": RankingPage
      },
      {
        "nome": "Raking do Geral das Equipes",
        "icone": "card-rankingGeral",
        "pagina": RankingPage
      },
      {
        "nome": "Tutoriais Diarios",
        "icone": "card-tutorialSemanal",
        "pagina": TutoriaisDiariosUsuarioPage
      },
      {
        "nome": "Tutoriais Gerais",
        "icone": "card-tutorialGeral",
        "pagina": TutoriaisGeraisUsuarioPage
      },
      {
        "nome": "Tutoriais Semanais",
        "icone": "card-tutorialSemanal",
        "pagina": TutoriaisSemanaisUsuarioPage
      }]
      
    } else if (this._serviceUsuario.obtemUsuarioLogado().tipo === '2') {
      return this.cards = [{
        "nome": "Tutoriais Gerais",
        "icone": "card-tutorialGeral",
        "pagina": "TutoriaisGeraisUsuarioPage"
      },
      {
        "nome": "Equipes",
        "icone": "card-equipes",
        "pagina": "AcessoEquipe"
      },
      {
        "nome": "Administradores",
        "icone": "card-administradores",
        "pagina": "AcessoAdministradores"
      },
      {
        "nome": "Treinadores",
        "icone": "card-treinadores",
        "pagina": "AcessoTreinadores"
      },
      {
        "nome": "Perfil",
        "icone": "card-perfil",
        "pagina": PerfilPage
      }]      
    } else if (this._serviceUsuario.obtemUsuarioLogado().tipo === '3') {
      return this.cards = [{
        "nome": "Equipes",
        "icone": "card-equipes",
        "pagina": "AcessoEquipe"
      },
      {
        "nome": "Administradores",
        "icone": "card-administradores",
        "pagina": "AcessoAdministradores"
      },
      {
        "nome": "Tutorias Gerais",
        "icone": "card-perfil",
        "pagina": ControllerTutoriaisGeraisPage
      },
      {
        "nome": "Tutorias Semanais",
        "icone": "card-perfil",
        "pagina": ControllerTutoriaisSemanaisPage
      },
      {
        "nome": "Perfil",
        "icone": "card-perfil",
        "pagina": PerfilPage
      }]
    }
  }
  
  openPage(card) {
    this.navCtrl.push(card);
  }

  exibirMenu(){
    if (this._serviceUsuario.obtemUsuarioLogado().tipo === '1') {
      this.page === "usuario"
    } else if (this._serviceUsuario.obtemUsuarioLogado().tipo === '2') {
      this.page === "treinador"
    } else {
      this.page === "admin"
    }
  }

  ionViewDidLoad() {
    this.exibirMenu();
    this.exibirHome();
  } 

}

