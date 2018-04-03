import { Component } from '@angular/core';
import { Service } from '../../providers/service';
import { Http } from '@angular/http/';
import { Usuario } from './usuario';
const KEY = 'avatarUrl';

@Component({
})
export class UsuarioService {

    public _usuarioLogado: Usuario;
    
    id: string;
    pswd: string;
    tipo: any;
    possui_equipe: any;
    possui_informacoes: any;
    possui_contrato: any;
    possui_exame: any;


    constructor(private _service: Service, private _http: Http) {
    } 

    realizaLogin(id: string, pswd: string) {

        let api = this._service.api + `crud/cadastros/validalogin?id_cadastro=${id}&password=${pswd}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(dado => {
                let usuario = new Usuario(id, dado.retorno, dado.tipo, dado.possui_equipe, dado.possui_informacoes, dado.possui_contrato, dado.possui_exames, dado.possui_whoqol, dado.possui_parq, dado.possui_termo, dado.possui_pesos_medidas, dado.possui_partes_corpo, dado.id_semana, dado.id_equipe);
                if (dado.retorno == 0) {
                }
                else if (dado.retorno == 1) {
                    this._usuarioLogado = usuario;
                    return usuario;
                }
                else if (dado.retorno == 2) {
                }
            });
    }

    obtemUsuarioLogado() {
        return this._usuarioLogado;
    }

    guardaAvatar(url) {
        localStorage.setItem(KEY, url);
    }

    obtemAvatar() {
        return localStorage.getItem(KEY);
    }
}