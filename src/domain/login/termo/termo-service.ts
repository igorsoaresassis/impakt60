import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Termo } from './termo';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class TermoService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaTermo(id: any){

        id = this._serviceUsuario._usuarioLogado.id
        
        let api = this._service.api + `crud/cadastros/aceitatermo?id_cadastro=${id}&aceito=1`;
        
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(termo => {
                return termo
            });
    }

    buscaDadosTermo(id: any) {

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/cadastros/retornatermoativo?login=${id}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let dados = new Termo(envia.nome, envia.id, envia.cpf, envia.rg, envia.idTermo, envia.texto)
                return dados
            });
    }
}