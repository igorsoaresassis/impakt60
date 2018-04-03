import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Exames } from './exames';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UsuarioService } from '../../usuario/usuario-service';
import { Service } from '../../../providers/service';

@Component({
})
export class ExamesService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario: UsuarioService, public _alertCtrl: AlertController) {}

    validaExames(
        id: any, 
        colesteroltotal: any, 
        colesterolhdl: any, 
        colesterolldl: any, 
        triglicerides: any, 
        pressaoarterial: any, 
        glicose: any, 
        hemogramahemacias: any, 
        hemogramahematocrito: any, 
        hemogramahemoglobina: any, 
        hemogramaleucocitos: any, 
        hemogramaplaquetas: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/examessaude/insert?id_cadastro=${id}&colesterol_total=${colesteroltotal}&colesterol_hdl=${colesterolhdl}&colesterol_ldl=${colesterolldl}&triglicerides=${triglicerides}&pressao_arterial=${pressaoarterial}&glicose=${glicose}&hemograma_hemacias=${hemogramahemacias}&hemograma_hematocrito=${hemogramahematocrito}&hemograma_hemoglobina=${hemogramahemoglobina}&hemograma_leucocitos=${hemogramaleucocitos}&hemograma_plaquetas=${hemogramaplaquetas}&status=1`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let exames = new Exames(envia.retorno)
                if(envia.retorno === "Sucesso"){
                    return exames
                }
            });
    }
}