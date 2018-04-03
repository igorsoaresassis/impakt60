import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Alimentacao } from './alimentacao';
import { UsuarioService } from '../../usuario/usuario-service';
import { Service } from '../../../providers/service';

@Component({
})
export class AlimentacaoService {

    public arquivos: File[];
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaAlimentacao(id: any, campo: any, fileUpload: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/upload/upatividades?id_cadastro=${id}&campo=${campo}&fileUpload=${fileUpload}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let informacao = new Alimentacao(envia.retorno)
                if(envia.retorno === "Sucesso"){
                    return informacao
                }
            });
    }
}