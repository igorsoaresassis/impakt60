import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Contrato } from './contrato';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';
import { ContratoDados } from './contatoDados';

@Component({
})
export class ContratoService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaContrato(id: any, id_contrato: any){

        id = this._serviceUsuario._usuarioLogado.id
        
        let api = this._service.api + `crud/contratousuario/insert?id_cadastro=${id}&status=1$id_contrato=${id_contrato}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let contrato = new Contrato(envia.retorno)
                if (envia.retorno === "Sucesso"){
                    return contrato
                }
            });
    }

    retornaContrato() {

        let api = this._service.api + `crud/contratos/retornacontratoativo`;

        return this._http
            .get(api)   
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let dados = new ContratoDados(envia.idContrato, envia.contrato)
                return dados
            });
    }
}