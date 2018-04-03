import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Perfil } from './perfil';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class PerfilService {

    public _equipe: Perfil;
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario: UsuarioService) {
        this._equipe
    }


    retornaPerfil(id: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/cadastros/buscalogin?login=${id}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let perfil = new Perfil(envia.login, envia.nome, envia.url_foto_perfil, envia.id_equipe)
                this._equipe = perfil;
                return perfil
            });
    }

    obtemEquipe() {
        return this._equipe;
    }
}