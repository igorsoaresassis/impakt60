import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Corpo } from './corpo';
import { UsuarioService } from '../../usuario/usuario-service';
import { Service } from '../../../providers/service';

@Component({
})
export class ParteCorpoService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario : UsuarioService) {}

    validaParteCorpo(id: any, fileUpload: any) {
        console.log(fileUpload);


        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/upload/upapartescorpo?id_cadastro=${id}&fileUpload=${fileUpload}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                    return envia
            });
    }
     

}