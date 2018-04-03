import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { Parq } from './parq';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class ParqService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario: UsuarioService, public _alertCtrl: AlertController) {}

    retornaPerguntas(tipo: any){

        let api = this._service.api + `crud/questionario/retornapergunta?tipo=${tipo}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(parq => {
                return parq
            });
    }

    validaResposta(id: any,
        tipo: any,
        resposta_um: any, 
        resposta_dois: any, 
        resposta_tres: any, 
        resposta_quatro: any, 
        resposta_cinco: any, 
        resposta_seis: any, 
        resposta_sete: any, 
        resposta_oito: any, 
        resposta_nove: any, 
        resposta_dez: any, 
        resposta_onze: any, 
        resposta_doze: any, 
        resposta_treze: any, 
        resposta_catorze: any, 
        resposta_quinze: any,
        pergunta_um: any,
        pergunta_dois: any,
        pergunta_tres: any,
        pergunta_quatro: any,
        pergunta_cinco: any,
        pergunta_seis: any,
        pergunta_sete: any,
        pergunta_oito: any,
        pergunta_nove: any,
        pergunta_dez: any,
        pergunta_onze: any,
        pergunta_doze: any,
        pergunta_treze: any,
        pergunta_catorze: any,
        pergunta_quinze: any) {

        id = this._serviceUsuario._usuarioLogado.id
        
        let api = this._service.api + `crud/respostaquestionario/insererespostas?id_cadastro=${id}&tipo=${tipo}`+ 
            `&id_pergunta_um=${pergunta_um}&resposta_um=${resposta_um}&id_pergunta_dois=${pergunta_dois}&resposta_dois=${resposta_dois}&id_pergunta_tres=${pergunta_tres}&resposta_tres=${resposta_tres}` + 
            `&id_pergunta_quatro=${pergunta_quatro}&resposta_quatro=${resposta_quatro}&id_pergunta_cinco=${pergunta_cinco}&resposta_cinco=${resposta_cinco}&id_pergunta_seis=${pergunta_seis}&resposta_seis=${resposta_seis}` + 
            `&id_pergunta_sete=${pergunta_sete}&resposta_sete=${resposta_sete}&id_pergunta_oito=${pergunta_oito}&resposta_oito=${resposta_oito}&id_pergunta_nove=${pergunta_nove}&resposta_nove=${resposta_nove}` +
            `&id_pergunta_dez=${pergunta_dez}&resposta_dez=${resposta_dez}&id_pergunta_onze=${pergunta_onze}&resposta_onze=${resposta_onze}&id_pergunta_doze=${pergunta_doze}&resposta_doze=${resposta_doze}` +
            `&id_pergunta_treze=${pergunta_treze}&resposta_treze=${resposta_treze}&id_pergunta_catorze=${pergunta_catorze}&resposta_catorze=${resposta_catorze}&id_pergunta_quinze=${pergunta_quinze}&resposta_quinze=${resposta_quinze}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(resposta => {
                return resposta
            });
    }
}