import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { ChatEquipe } from './chat-equipe';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class ChatEquipeService{
    
    constructor(private _service: Service, private _http: Http, public _alertCtrl: AlertController, public _serviceUsuario : UsuarioService) {}

    retornaPerfil(id_equipe: any){

        id_equipe = this._serviceUsuario._usuarioLogado.id_equipe

        let api = this._service.api + `crud/chatmensagens/retornamsg?id_equipe=${id_equipe}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(chat => {
                return chat
            });
    }

    enviarMensagem(id_usuario: any, mensagem: any, id_equipe: any, urlArquivo: any) {
        
        urlArquivo = null

        id_equipe = this._serviceUsuario._usuarioLogado.id_equipe

        let api = this._service.api + `crud/chatmensagens/gravaretornamsg?id_cadastro=${id_usuario}&mensagem=${mensagem}&id_equipe=${id_equipe}&url_arquivo=${urlArquivo}`;
        
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(mensagemChat => {
                return mensagemChat
            });
    }
}