import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Informacao } from './informacoes';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class InformacoesService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaInformacao(id: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/informacoesprevias/insert?id_cadastro=${id}&status=1`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let informacao = new Informacao(envia.retorno)
                if(envia.retorno === "Sucesso"){
                    return informacao
                }
            });
    }
}