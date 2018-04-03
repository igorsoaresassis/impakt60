import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Codigo } from './codigo';
import { UsuarioService } from '../../usuario/usuario-service';
import { Service } from '../../../providers/service';


@Component({
})
export class CodigoService {

    sqlite: any;

    id: string;
    codigo: string;
    retorno: string;
    
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaCodigo(id: any, codigo: string){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/equipemembros/vinculacadastroequipe?id_cadastro=${id}&codigo=${codigo}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let codigo = new Codigo(envia.retorno);
                if (envia.retorno === "Sucesso"){
                    return codigo;
                } 
                else if (envia.retorno === "Limite maximo de quantidade de membros da equipe alcancado") {
                    return codigo;
                }
                else if (envia.retorno === "Codigo invalido") {
                    return codigo;
                }
            });
    }

}