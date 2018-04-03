import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Service } from '../../../providers/service'; 
import { inativarAtivarTutoriaisSemanais } from './inativar-ativar-tutoriais-semanais';

@Component({
})
export class TutoriaisSemanaisAdminService {
    
    constructor(private _service: Service, private _http: Http) {}

    validaTutoriaisSemanaisAdmin(){

        let api = this._service.api + `crud/tutoriaissemanais/getalltutoriais`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(semanais => {
                return semanais
            });
    }

    // inativaAtivaSemanaisAdmin(id: any, status: any){

    //     let api = this._service.api + `crud/tutoriaissemanais/edittutorialgeral?id=${id}&status=${status}`;

    //     return this._http
    //         .get(api)
    //         .map(res => res.json())
    //         .toPromise()
    //         .then(envia => {
    //             let inativarAtivar = new inativarAtivarTutoriaisSemanais(envia.retorno)
    //             return inativarAtivar
    //         });
    // }

}