import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Registros } from './registros';
import { Medidas } from './medidas';
import { UsuarioService } from '../../usuario/usuario-service';
import { Service } from '../../../providers/service';

@Component({
})
export class MedidasService {

    public element: any
    
    constructor(
        private _service: Service, 
        private _http: Http, 
        public _serviceUsuario : UsuarioService
    ) {}

    validaDataRegistro(id: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/pesosmedidas/verificadata?id_cadastro=${id}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let medidas = new Medidas(envia.retorno, envia.data_atual, envia.proxima_data)
                return medidas;
            });
    }

    validaMedidas(id: any, id_semana: any, peso: any, abdomen: any, cintura: any, quadril: any){

        id = this._serviceUsuario._usuarioLogado.id

        id_semana = this._serviceUsuario._usuarioLogado.id_semana
        
        let api = this._service.api + `crud/pesosmedidas/insert?id_cadastro=${id}&id_semana=${id_semana}&peso=${peso}&abdomen=${abdomen}&cintura=${cintura}&quadril=${quadril}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let medidas = new Registros(envia.retorno)
                if(envia.retorno === "Sucesso"){
                    return medidas;
                }
            });
    }
    
}