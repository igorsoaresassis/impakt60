import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ChatEquipeService } from '../../../../domain/tipo-usuario/chatEquipe/chat-equipe-service';
import { ChatEquipe } from '../../../../domain/tipo-usuario/chatEquipe/chat-equipe';
import { UsuarioService } from '../../../../domain/usuario/usuario-service';
import { MensagemRetorna } from '../../../../domain/tipo-usuario/chatEquipe/mensagem';

declare var $: any;

@Component({
  selector: 'page-chat-equipe',
  templateUrl: 'chat-equipe.html',
})
export class ChatEquipePage {


  public id_equipe: any
  public Chat: ChatEquipe[]
  public id_usuario: any
  public mensagem: any
  public urlArquivo: any
  public MensagemEnviada: String
  public IdEnviada: any
  public RetornoMensagem: String
  public IdAntigo = 0

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    public _serviceChatEquipe: ChatEquipeService,
    public _serviceUsuario: UsuarioService) {
    this.id_usuario = this._serviceUsuario._usuarioLogado.id
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Mensagens. Aguarde ...'
    });

    loader.present();

    this._serviceChatEquipe
      .retornaPerfil(this.id_equipe)
      .then(chat => {
        this.Chat = chat

        loader.dismiss();
      });
  }

  enviarMensagem(){

    var mensagem = $('#team_chat_message').val();

    if (mensagem != '') {

      $.post('https://impakt60.ak-backoffice.com.br/crud/chatmensagens/gravaretornamsg',
        {
          "id_cadastro": this._serviceUsuario._usuarioLogado.id,
          "mensagem": mensagem,
          "id_equipe": this._serviceUsuario._usuarioLogado.id_equipe,
          "url_arquivo": 'a'
        }, function (data) {

          $("#team_chat_message").val("");
          var to_append = '';

          var dados = JSON.parse(data);
          to_append += '<div class="direct-chat-messages" id="admin_coach_chat_here">';
          to_append += '<ul class="list list-chats">';
          to_append += '<li class="list-chat right" data-ix="list-item"> ';
          to_append += '<div class="chat column-right right w-clearfix">';
          to_append += '<div class="arrow-globe right"></div>';
          to_append += '<div class="chat-text right">' + dados.mensagem + '</div>';
          to_append += '<div class="chat-time right">' + dados.idCadastro + ' - ' + dados.dataCadastro; +'</div>';
          to_append += '</div>';
          to_append += '</li>';
          to_append += '</ul>';
          to_append += '</div>';

          $('#controle').val(dados.id);

          $('#team_chat_here').append(to_append);
        }
      );
    } else {

      var imagem = $('#team_chat_picture').val();
      var video = $('#team_chat_video').val();
      var documento = $('#team_chat_document').val();

      var formdata = new FormData();

      $.when($('.fileUpload').each(function (i, e) {
        // adiciona uma entrada em "formdata" para cada campos de classe "fileUpload" com arquivo selecionado
        var file = e.files[0];
        if (file)
          formdata.append('fileUpload[' + i + ']', file);
          formdata.append('id_cadastro', this._serviceUsuario._usuarioLogado.id);
          formdata.append('id_equipe', this._serviceUsuario._usuarioLogado.id_equipe);

      })).done(function () {
        $.ajax({
          type: 'POST', cache: false, processData: false, contentType: false,
          url: 'https://impakt60.ak-backoffice.com.br/crud/upload/upachat', 
          data: formdata,
          success: function (data) {
            var dados = JSON.parse(data);
            if (dados.retorno == 'Sucesso') {
              console.log("ok");
              
            }
          }
        });
      });
    }


    /*
    if(this.mensagem === ""){

    }
    else{
      this._serviceChatEquipe
      .enviarMensagem(this.id_usuario, this.mensagem, this.id_equipe, this.urlArquivo)
        .then(mensagemChat => {
          this.IdEnviada = mensagemChat.id
          // if (this.IdAntigo != this.IdEnviada){
            // this.IdAntigo = this.IdEnviada
          // }
          this.MensagemEnviada = mensagemChat.mensagem
          this.RetornoMensagem = mensagemChat.retorno
      });
    }
    */
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatEquipePage');
  }
  

}
