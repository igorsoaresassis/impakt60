import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { GeraisUsuario } from './gerais-usuario';

@Component({
})
export class TutoriaisGeraisUsuarioService {
    
    constructor(private _service: Service, private _http: Http, public _alertCtrl: AlertController) {}

    validaTutoriaisGerais(){

        let api = this._service.api + `crud/tutoriaisgerais/getalltutoriais`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(tutoriaisGerais => {
                return tutoriaisGerais
            });
    }
}