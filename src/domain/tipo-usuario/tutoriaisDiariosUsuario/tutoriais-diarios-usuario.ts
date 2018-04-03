import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

declare var moment;

@Component({
})
export class TutoriaisDiariosUsuarioService {
    
    constructor(private _service: Service, private _http: Http, public _alertCtrl: AlertController) {}

    validaTutoriaisDiarios(myDate: any) {

        let api = this._service.api + `crud/tutoriaisdiarios/gettutorialdata?data=${myDate}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(tutoriaisDiarios => {
                return tutoriaisDiarios
            });
    }
}