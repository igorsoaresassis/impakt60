import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Service } from '../../../providers/service';
import { tutoriaisGeraisAdmin } from './tutoriais-gerais-Admin';
import { inativarAtivarTutoriaisGerais } from './inativar-ativar-tutoriais-gerais';


@Component({
})
export class TutoriaisGeraisAdminService {
    
    constructor(private _service: Service, private _http: Http) {}

    validaTutoriaisGeraisAdmin(){

        let api = this._service.api + `crud/tutoriaisgerais/getalltutoriais`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(gerais => {
                return gerais
            });
    }

    inativaAtivaGeraisAdmin(id: any, status: any){
        let api = this._service.api + `crud/tutoriaisgerais/edittutorialgeral?id=${id}&status=${status}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let inativarAtivar = new inativarAtivarTutoriaisGerais(envia.retorno)
                return inativarAtivar
            });
    }

}