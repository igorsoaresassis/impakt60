import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { Service } from '../providers/service';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { Camera } from '@ionic-native/camera';
import { FileUploadModule } from 'ng2-file-upload';
import { File } from '@ionic-native/file';
import { FTP } from '@ionic-native/ftp';
import { ExpandableComponent } from '../components/expandable/expandable';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParticipeEquipePage } from '../pages/login/participe-equipe/participe-equipe';
import { ContratoPage } from '../pages/login/contrato/contrato';
import { InformacoesPrevias } from '../pages/login/informacoes-previas/informacoes-previas';
import { ExamePage } from '../pages/login/exame/exame';
import { MedidasPage } from '../pages/home/Usuario/medidas/medidas';
import { RegistroPage } from '../pages/home/Usuario/medidas/registro/registro';
import { HistoricoPage } from '../pages/home/Usuario/medidas/historico/historico';
import { AdicionarTreinadorPage } from '../pages/home/Admin/adicionar-treinador/adicionar-treinador';
import { ParteCorpoPage } from '../pages/home/Usuario/parte-corpo/parte-corpo';
import { RankingPage } from '../pages/home/Usuario/ranking/ranking';
import { AlimentacaoPage } from '../pages/home/Usuario/alimentacao/alimentacao';
import { RotaPage } from '../pages/home/Usuario/rota/rota';
import { HistoricoRotaPage } from '../pages/home/Usuario/rota/historico-rota/historico-rota';
import { PerfilPage } from '../pages/home/Usuario/perfil/perfil';
import { TutoriaisGeraisUsuarioPage } from '../pages/home/Usuario/tutoriais-gerais-usuario/tutoriais-gerais-usuario';
import { TutoriaisSemanaisUsuarioPage } from '../pages/home/Usuario/tutoriais-semanais-usuario/tutoriais-semanais-usuario';
import { VisualizaExamesPage } from '../pages/home/Usuario/visualiza-exames/visualiza-exames';
import { ChatEquipePage } from '../pages/home/Usuario/chat-equipe/chat-equipe';
import { ContatoTreinadorPage } from '../pages/home/Usuario/contato-treinador/contato-treinador';
import { ControllerTutoriaisSemanaisPage } from '../pages/home/Admin/controller-tutoriais-semanais/controller-tutoriais-semanais';
import { ControllerTutoriaisGeraisPage } from '../pages/home/Admin/controller-tutoriais-gerais/controller-tutoriais-gerais';
import { CadastraTutoriaisGeraisPage } from '../pages/home/Admin/controller-tutoriais-gerais/cadastra-tutoriais-gerais/cadastra-tutoriais-gerais';
import { ListaTutoriasGeraisPage } from '../pages/home/Admin/controller-tutoriais-gerais/lista-tutorias-gerais/lista-tutorias-gerais';
import { CadastraTutoriaisSemanaisPage } from '../pages/home/Admin/controller-tutoriais-semanais/cadastra-tutoriais-gerais/cadastra-tutoriais-semanais';
import { ListaTutoriasSemanaisPage } from '../pages/home/Admin/controller-tutoriais-semanais/lista-tutorias-gerais/lista-tutorias-semanais';
import { ParqPage } from '../pages/login/parq/parq';
import { TermoPage } from '../pages/login/termo/termo';
import { WhoqolPage } from '../pages/login/whoqol/whoqol';
import { TutoriaisDiariosUsuarioPage } from '../pages/home/Usuario/tutoriais-diarios-usuario/tutoriais-diarios-usuario';
import { ParteCorpologinPage } from '../pages/login/parte-corpo-login/parte-corpo-login';
import { MedidaLoginPage } from '../pages/login/medida-login/medida-login';
import { FimPage } from '../pages/fim/fim';
import { AguardePage } from '../pages/aguarde/aguarde';

import { UsuarioService } from '../domain/usuario/usuario-service';
import { CodigoService } from '../domain/tipo-usuario/codigo/codigo-service';
import { InformacoesService } from '../domain/login/informacoesPrevias/informacoes-service';
import { ContratoService } from '../domain/login/contrato/contrato-service';
import { ExamesService } from '../domain/login/exames/exames-service';
import { MedidasService } from '../domain/tipo-usuario/medidas/medidas-service';
import { TutoriaisSemanaisUsuarioService } from '../domain/tipo-usuario/tutoriaisSemanaisUsuario/tutoriais-semanais-usuario';
import { VisualizaExamesService } from '../domain/tipo-usuario/visualizaExame/visualiza-exames';
import { ParteCorpoService } from '../domain/tipo-usuario/parteCorpo/parteCorpo-service';
import { AlimentacaoService } from '../domain/tipo-usuario/alimentacao/alimentacao-service';
import { TutoriaisGeraisAdminService } from '../domain/tipo-admin/tutoriais-gerais/tutoriais-gerais-admin-service';
import { TutoriaisSemanaisAdminService } from '../domain/tipo-admin/tutoriais-semanais/tutoriais-semanais-admin-service';
import { TermoService } from '../domain/login/termo/termo-service';
import { ParqService } from '../domain/login/parq/parq-service';
import { WhoqolService } from '../domain/login/whoqol/whoqol-service';
import { TutoriaisGeraisUsuarioService } from '../domain/tipo-usuario/tutoriaisGeraisUsuario/tutoriais-gerais-usuario';
import { TutoriaisDiariosUsuarioService } from '../domain/tipo-usuario/tutoriaisDiariosUsuario/tutoriais-diarios-usuario';
import { PerfilService } from '../domain/tipo-usuario/perfil/perfil-service';
import { ChatEquipeService } from '../domain/tipo-usuario/chatEquipe/chat-equipe-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ParticipeEquipePage,
    ContratoPage,
    InformacoesPrevias,
    ExamePage,
    MedidasPage,
    RegistroPage,
    HistoricoPage,
    AdicionarTreinadorPage,
    ParteCorpoPage,
    RankingPage,
    AlimentacaoPage,
    RotaPage,
    HistoricoRotaPage,
    PerfilPage,
    TutoriaisGeraisUsuarioPage,
    TutoriaisSemanaisUsuarioPage,
    VisualizaExamesPage,
    ChatEquipePage,
    ContatoTreinadorPage,
    ControllerTutoriaisGeraisPage,
    CadastraTutoriaisGeraisPage,
    ListaTutoriasGeraisPage,
    ControllerTutoriaisSemanaisPage,
    CadastraTutoriaisSemanaisPage,
    ListaTutoriasSemanaisPage,
    ParqPage,
    TermoPage,
    WhoqolPage,
    ParteCorpologinPage,
    MedidaLoginPage,
    AguardePage,
    FimPage,
    TutoriaisDiariosUsuarioPage,
    ExpandableComponent
  ],
  imports: [ 
    FormsModule, 
    BrowserModule,
    FileUploadModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ParticipeEquipePage,
    ContratoPage,
    InformacoesPrevias,
    ExamePage,
    MedidasPage,
    RegistroPage,
    HistoricoPage,
    AdicionarTreinadorPage,
    ParteCorpoPage,
    RankingPage,
    AlimentacaoPage,
    RotaPage,
    HistoricoRotaPage,
    PerfilPage,
    TutoriaisGeraisUsuarioPage,
    TutoriaisSemanaisUsuarioPage,
    VisualizaExamesPage,
    ChatEquipePage,
    ContatoTreinadorPage,
    ControllerTutoriaisGeraisPage,
    CadastraTutoriaisGeraisPage,
    ListaTutoriasGeraisPage,
    ControllerTutoriaisSemanaisPage,
    CadastraTutoriaisSemanaisPage,
    ListaTutoriasSemanaisPage,
    ParqPage,
    TermoPage,
    WhoqolPage,
    ParteCorpologinPage,
    MedidaLoginPage,
    AguardePage,
    FimPage,
    TutoriaisDiariosUsuarioPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    UsuarioService,
    CodigoService,
    InformacoesService,
    ContratoService,
    ExamesService,
    MedidasService,
    TutoriaisSemanaisUsuarioService,
    VisualizaExamesService,
    ParteCorpoService,
    AlimentacaoService,
    TutoriaisGeraisAdminService,
    TutoriaisSemanaisAdminService,
    TutoriaisGeraisUsuarioService,
    TutoriaisDiariosUsuarioService,
    TermoService,
    PerfilService,
    WhoqolService,
    StreamingMedia,
    ParqService,
    ChatEquipeService,
    Camera, 
    File,
    FTP,
    Transfer,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
