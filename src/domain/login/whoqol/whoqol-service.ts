import { Component } from '@angular/core';
import { Http } from '@angular/http/';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Service } from '../../../providers/service';
import { UsuarioService } from '../../usuario/usuario-service';

@Component({
})
export class WhoqolService {
    
    constructor(private _service: Service, private _http: Http, public _serviceUsuario: UsuarioService, public _alertCtrl: AlertController) {}

    retornaPerguntas(tipo: any){

        let api = this._service.api + `crud/questionario/retornapergunta?tipo=${tipo}`;
       
        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(whoqol => {
                return whoqol
            });
    }

    validaResposta(
        id: any,
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
        resposta_dezesseis: any,
        resposta_dezessete: any,
        resposta_dezoito: any,
        resposta_dezenove: any,
        resposta_vinte: any,
        resposta_vinteUm: any,
        resposta_vinteDois: any,
        resposta_vintetres: any,
        resposta_vintequatro: any,
        resposta_vintecinco: any,
        resposta_vinteseis: any,
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
        pergunta_quinze: any,
        pergunta_dezesseis: any,
        pergunta_dezessete: any,
        pergunta_dezoito: any,
        pergunta_dezenove: any,
        pergunta_vinte: any,
        pergunta_vinteUm: any,
        pergunta_vinteDois: any,
        pergunta_vintetres: any,
        pergunta_vintequatro: any,
        pergunta_vintecinco: any,
        pergunta_vinteseis: any
    ){
        id = this._serviceUsuario._usuarioLogado.id

        let api = this._service.api + `crud/respostaquestionario/insererespostas?id_cadastro=${id}&tipo=${tipo}&` + 
            `&id_pergunta_um=${pergunta_um}&resposta_um=${resposta_um}&id_pergunta_dois=${pergunta_dois}&resposta_dois=${resposta_dois}&id_pergunta_tres=${pergunta_tres}&resposta_tres=${resposta_tres}` +
            `&id_pergunta_quatro=${pergunta_quatro}&resposta_quatro=${resposta_quatro}&id_pergunta_cinco=${pergunta_cinco}&resposta_cinco=${resposta_cinco}&id_pergunta_seis=${pergunta_seis}&resposta_seis=${resposta_seis}` +
            `&id_pergunta_sete=${pergunta_sete}&resposta_sete=${resposta_sete}&id_pergunta_oito=${pergunta_oito}&resposta_oito=${resposta_oito}&id_pergunta_nove=${pergunta_nove}&resposta_nove=${resposta_nove}` +
            `&id_pergunta_dez=${pergunta_dez}&resposta_dez=${resposta_dez}&id_pergunta_onze=${pergunta_onze}&resposta_onze=${resposta_onze}&id_pergunta_doze=${pergunta_doze}&resposta_doze=${resposta_doze}` +
            `&id_pergunta_treze=${pergunta_treze}&resposta_treze=${resposta_treze}&id_pergunta_catorze=${pergunta_catorze}&resposta_catorze=${resposta_catorze}&id_pergunta_quinze=${pergunta_quinze}&resposta_quinze=${resposta_quinze}` +
            `&id_pergunta_dezesseis=${pergunta_dezesseis}&resposta_dezesseis=${resposta_dezesseis}&id_pergunta_dezesete=${pergunta_dezessete}&resposta_dezesete=${resposta_dezessete}&id_pergunta_dezoito=${pergunta_dezoito}&resposta_dezoito=${resposta_dezoito}` +
            `&id_pergunta_dezenove=${pergunta_dezenove}&resposta_dezenove=${resposta_dezenove}&id_pergunta_vinte=${pergunta_vinte}&resposta_vinte=${resposta_vinte}&id_pergunta_vinte_um=${pergunta_vinteUm}&resposta_vinte_um=${resposta_vinteUm}` +
            `&id_pergunta_vinte_dois=${pergunta_vinteDois}&resposta_vinte_dois=${resposta_vinteDois}&id_pergunta_vinte_tres=${pergunta_vintetres}&resposta_vinte_tres=${resposta_vintetres}&id_pergunta_vinte_quatro=${pergunta_vintequatro}&resposta_vinte_quatro=${resposta_vintequatro}` +
            `&id_pergunta_vinte_cinco=${pergunta_vintecinco}&resposta_vinte_cinco=${resposta_vintecinco}&id_pergunta_vinte_seis=${pergunta_vinteseis}&resposta_vinte_seis=${resposta_vinteseis}`;

        return this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(resposta => {
                return resposta
            });
    }
}