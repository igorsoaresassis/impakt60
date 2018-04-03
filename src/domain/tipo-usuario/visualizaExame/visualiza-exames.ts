import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Exame } from './exame';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class VisualizaExamesService {
    
    constructor(private _service: Service, private _http: Http, public _alertCtrl: AlertController, public _serviceUsuario : UsuarioService) {}

    retornaExames(id: any){

        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/examessaude/retornaexamessaude?id_cadastro=${id}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(envia => {
                let exame = new Exame(envia.colesterol_total, envia.colesterol_hdl, envia.colesterol_ldl, envia.triglicerides, envia.pressao_arterial, envia.glicose, envia.hemograma_hemacias, envia.hemograma_hematocrito, envia.hemograma_hemoglobina, envia.hemograma_leucocitos, envia.hemograma_plaquetas, envia.retorno)
                if(envia.retorno === "Completo"){
                    return exame
                }
                else {
                    this._alertCtrl.create({
                        title: 'Falha ao carregar Exames realizado',
                        buttons: [{ text: 'Ok' }],
                        subTitle: 'Favor contatar a equipe responsavél'
                    }).present();
                }
            });
    }
}