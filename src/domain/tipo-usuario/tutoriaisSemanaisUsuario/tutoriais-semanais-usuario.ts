import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { SemanaisUsuario } from './semanais-usuario';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class TutoriaisSemanaisUsuarioService {
    
    constructor(private _service: Service, private _http: Http, public _alertCtrl: AlertController, public _serviceUsuario : UsuarioService) {}

    validaTutoriaisSemanais(id: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/tutoriaissemanais/retornatutoriais?id_cadastro=${id}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let tutoriaisSemanais = new SemanaisUsuario(envia.semana, envia.urlArquivo, envia.retorno)
                if(envia.retorno === "Sucesso"){
                    return tutoriaisSemanais
                }
                else {
                    this._alertCtrl.create({
                        title: 'Falha ao carregar Tutoriais Semanais',
                        buttons: [{ text: 'Ok' }],
                        subTitle: 'Favor entrar em contato com o Treinador'
                    }).present();
                }
            });
    }
}